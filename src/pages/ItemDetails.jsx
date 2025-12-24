import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLibrary } from "../context/LibraryContext";

/* =========================
   OLD (working)
   ========================= */

// export default function ItemDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { items, toggleFavorite, removeItem, updateItem } = useLibrary();

//   const item = useMemo(() => items.find((it) => it.id === id), [items, id]);

//   if (!item) {
//     return (
//       <>
//         <h1>Item Not Found</h1>
//         <p>This item does not exist (maybe it was deleted).</p>
//         <Link to="/library">← Back to Library</Link>
//       </>
//     );
//   }

//   const statusValue = item.status || "unread";
//   const addedDate = item.dateAdded
//     ? new Date(item.dateAdded).toLocaleString()
//     : "—";

//   function handleDelete() {
//     removeItem(item.id);
//     navigate("/library");
//   }

//   return (
//     <>
//       <h1>Item Details</h1>

//       <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
//         {item.thumbnail ? (
//           <img
//             src={item.thumbnail}
//             alt={item.title}
//             style={{ width: 140, height: "auto", borderRadius: 8 }}
//           />
//         ) : (
//           <div
//             style={{
//               width: 140,
//               height: 200,
//               border: "1px solid #ddd",
//               borderRadius: 8,
//               display: "grid",
//               placeItems: "center",
//               opacity: 0.7,
//             }}
//           >
//             No image
//           </div>
//         )}

//         <div style={{ flex: 1 }}>
//           <p style={{ margin: 0 }}>
//             <strong>Title:</strong> {item.title}
//           </p>
//           <p style={{ margin: "6px 0 0" }}>
//             <strong>Author:</strong> {item.author}
//           </p>
//           {item.genre ? (
//             <p style={{ margin: "6px 0 0" }}>
//               <strong>Genre:</strong> {item.genre}
//             </p>
//           ) : null}
//           <p style={{ margin: "6px 0 0" }}>
//             <strong>Status:</strong> {statusValue}
//           </p>
//           <p style={{ margin: "6px 0 0", opacity: 0.8, fontSize: 13 }}>
//             <strong>Added:</strong> {addedDate}
//           </p>

//           <div
//             style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}
//           >
//             <button onClick={() => toggleFavorite(item.id)}>
//               {item.isFavorite ? "Unfavorite" : "Favorite"}
//             </button>

//             <button onClick={handleDelete}>Delete</button>

//             <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
//               Status:
//               <select
//                 value={statusValue}
//                 onChange={(e) =>
//                   updateItem(item.id, { status: e.target.value })
//                 }
//               >
//                 <option value="unread">unread</option>
//                 <option value="reading">reading</option>
//                 <option value="completed">completed</option>
//               </select>
//             </label>
//           </div>
//         </div>
//       </div>

//       <div style={{ marginTop: 14 }}>
//         <h3>Description</h3>
//         <p style={{ whiteSpace: "pre-wrap" }}>
//           {item.description ? item.description : "No description available."}
//         </p>
//       </div>

//       <div style={{ marginTop: 16 }}>
//         <Link to="/library">← Back to Library</Link>
//       </div>
//     </>
//   );
// }

/* =========================
   NEW (polished UI only)
   - logic sama
   ========================= */

export default function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, toggleFavorite, removeItem, updateItem } = useLibrary();

  const item = useMemo(() => items.find((it) => it.id === id), [items, id]);

  if (!item) {
    return (
      <>
        <h1>Item Not Found</h1>
        <div
          style={{
            marginTop: 12,
            padding: 14,
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: 12,
            background: "rgba(255,255,255,0.75)",
          }}
        >
          <p style={{ margin: 0 }}>
            This item does not exist (maybe it was deleted).
          </p>
        </div>

        <div style={{ marginTop: 14 }}>
          <Link to="/library">← Back to Library</Link>
        </div>
      </>
    );
  }

  const statusValue = item.status || "unread";
  const addedDate = item.dateAdded
    ? new Date(item.dateAdded).toLocaleString()
    : "—";

  function handleDelete() {
    removeItem(item.id);
    navigate("/library");
  }

  return (
    <>
      <h1>Item Details</h1>

      <div
        style={{
          marginTop: 12,
          padding: 14,
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: 14,
          background: "rgba(255,255,255,0.78)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Thumbnail */}
          {item.thumbnail ? (
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{
                width: 160,
                height: "auto",
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            />
          ) : (
            <div
              style={{
                width: 160,
                height: 220,
                border: "1px solid rgba(0,0,0,0.12)",
                borderRadius: 12,
                display: "grid",
                placeItems: "center",
                opacity: 0.7,
                background: "rgba(0,0,0,0.03)",
              }}
            >
              No image
            </div>
          )}

          {/* Info */}
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div
                style={{
                  fontWeight: 900,
                  fontSize: 20,
                  lineHeight: 1.2,
                  flex: 1,
                }}
                title={item.title}
              >
                {item.title}
              </div>

              <button
                onClick={() => toggleFavorite(item.id)}
                style={{
                  border: "1px solid rgba(0,0,0,0.12)",
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: 10,
                  padding: "6px 10px",
                  cursor: "pointer",
                }}
              >
                {item.isFavorite ? "★ Favorited" : "☆ Favorite"}
              </button>
            </div>

            <div style={{ marginTop: 6, opacity: 0.85 }}>
              <span style={{ fontWeight: 700 }}>Author:</span> {item.author}
            </div>

            {item.genre ? (
              <div style={{ marginTop: 6, opacity: 0.85 }}>
                <span style={{ fontWeight: 700 }}>Genre:</span> {item.genre}
              </div>
            ) : null}

            <div style={{ marginTop: 6, opacity: 0.85 }}>
              <span style={{ fontWeight: 700 }}>Status:</span> {statusValue}
            </div>

            <div style={{ marginTop: 6, opacity: 0.8, fontSize: 13 }}>
              <span style={{ fontWeight: 700 }}>Added:</span> {addedDate}
            </div>

            {/* Actions */}
            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: 14,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontWeight: 700 }}>Status:</span>
                <select
                  value={statusValue}
                  onChange={(e) =>
                    updateItem(item.id, { status: e.target.value })
                  }
                  style={{ padding: "6px 8px", borderRadius: 8 }}
                >
                  <option value="unread">unread</option>
                  <option value="reading">reading</option>
                  <option value="completed">completed</option>
                </select>
              </label>

              <button
                onClick={handleDelete}
                style={{
                  border: "1px solid rgba(0,0,0,0.12)",
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: 10,
                  padding: "6px 10px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div style={{ marginTop: 16 }}>
          <div style={{ fontWeight: 900, marginBottom: 6 }}>Description</div>
          <div
            style={{
              padding: 12,
              borderRadius: 12,
              border: "1px solid rgba(0,0,0,0.08)",
              background: "rgba(255,255,255,0.75)",
              whiteSpace: "pre-wrap",
              lineHeight: 1.45,
            }}
          >
            {item.description ? item.description : "No description available."}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <Link to="/library">← Back to Library</Link>
      </div>
    </>
  );
}
