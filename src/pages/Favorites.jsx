import { Link } from "react-router-dom";
import { useLibrary } from "../context/LibraryContext";

/* =========================
   OLD (working)
   ========================= */

// export default function Favorites() {
//   const { items, toggleFavorite, removeItem, updateItem } = useLibrary();

//   const favorites = items.filter((item) => item.isFavorite);

//   return (
//     <>
//       <h1>Favorites</h1>

//       {favorites.length === 0 ? (
//         <p>No favorites yet. Star an item in Library.</p>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
//             gap: 14,
//           }}
//         >
//           {favorites.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 border: "1px solid #e5e5e5",
//                 borderRadius: 12,
//                 padding: 12,
//                 display: "flex",
//                 gap: 12,
//               }}
//             >
//               {/* Thumbnail */}
//               {item.thumbnail ? (
//                 <img
//                   src={item.thumbnail}
//                   alt={item.title}
//                   style={{
//                     width: 80,
//                     height: 110,
//                     objectFit: "cover",
//                     borderRadius: 8,
//                     border: "1px solid #eee",
//                   }}
//                 />
//               ) : (
//                 <div
//                   style={{
//                     width: 80,
//                     height: 110,
//                     borderRadius: 8,
//                     border: "1px solid #eee",
//                     display: "grid",
//                     placeItems: "center",
//                     opacity: 0.6,
//                     fontSize: 12,
//                   }}
//                 >
//                   No image
//                 </div>
//               )}

//               {/* Info */}
//               <div style={{ flex: 1, minWidth: 0 }}>
//                 <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//                   <Link
//                     to={`/item/${item.id}`}
//                     style={{
//                       fontWeight: 800,
//                       textDecoration: "none",
//                       color: "inherit",
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                       whiteSpace: "nowrap",
//                       display: "block",
//                       flex: 1,
//                     }}
//                     title={item.title}
//                   >
//                     {item.title}
//                   </Link>

//                   <button onClick={() => toggleFavorite(item.id)}>★</button>
//                 </div>

//                 <div style={{ fontSize: 13, opacity: 0.8, marginTop: 4 }}>
//                   {item.author}
//                 </div>

//                 <div
//                   style={{
//                     display: "flex",
//                     gap: 8,
//                     marginTop: 10,
//                     flexWrap: "wrap",
//                   }}
//                 >
//                   <label
//                     style={{ display: "flex", gap: 6, alignItems: "center" }}
//                   >
//                     Status:
//                     <select
//                       value={item.status || "unread"}
//                       onChange={(e) =>
//                         updateItem(item.id, { status: e.target.value })
//                       }
//                     >
//                       <option value="unread">unread</option>
//                       <option value="reading">reading</option>
//                       <option value="completed">completed</option>
//                     </select>
//                   </label>

//                   <button onClick={() => removeItem(item.id)}>Delete</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

/* =========================
   NEW (polished UI only)
   - logic sama
   ========================= */

export default function Favorites() {
  const { items, toggleFavorite, removeItem, updateItem } = useLibrary();

  const favorites = items.filter((item) => item.isFavorite);

  return (
    <>
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <div
          style={{
            marginTop: 12,
            padding: 14,
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: 12,
            background: "rgba(255,255,255,0.75)",
          }}
        >
          No favorites yet. Star an item in Library.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 14,
          }}
        >
          {favorites.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: 14,
                padding: 12,
                display: "flex",
                gap: 12,
                background: "rgba(255,255,255,0.78)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              }}
            >
              {/* Thumbnail */}
              {item.thumbnail ? (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{
                    width: 82,
                    height: 118,
                    objectFit: "cover",
                    borderRadius: 10,
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 82,
                    height: 118,
                    borderRadius: 10,
                    border: "1px solid rgba(0,0,0,0.08)",
                    display: "grid",
                    placeItems: "center",
                    opacity: 0.65,
                    fontSize: 12,
                    background: "rgba(0,0,0,0.03)",
                  }}
                >
                  No image
                </div>
              )}

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <Link
                    to={`/item/${item.id}`}
                    style={{
                      fontWeight: 800,
                      textDecoration: "none",
                      color: "inherit",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      display: "block",
                      flex: 1,
                    }}
                    title={item.title}
                  >
                    {item.title}
                  </Link>

                  <button
                    onClick={() => toggleFavorite(item.id)}
                    style={{
                      border: "1px solid rgba(0,0,0,0.12)",
                      background: "rgba(255,255,255,0.9)",
                      borderRadius: 10,
                      padding: "6px 8px",
                      cursor: "pointer",
                    }}
                    title="Unfavorite"
                  >
                    ★
                  </button>
                </div>

                <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>
                  {item.author}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    marginTop: 10,
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <label
                    style={{ display: "flex", gap: 6, alignItems: "center" }}
                  >
                    <span style={{ fontWeight: 600 }}>Status:</span>
                    <select
                      value={item.status || "unread"}
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
                    onClick={() => removeItem(item.id)}
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
          ))}
        </div>
      )}
    </>
  );
}
