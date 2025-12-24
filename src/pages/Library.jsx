import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { useLibrary } from "../context/LibraryContext";

/* =========================
   OLD (working)
   ========================= */

// export default function Library() {
//   const { items, removeItem, toggleFavorite, updateItem } = useLibrary();

//   const [statusFilter, setStatusFilter] = useState("all");
//   const [favoritesOnly, setFavoritesOnly] = useState(false);
//   const [sortBy, setSortBy] = useState("dateDesc");

//   const visibleItems = useMemo(() => {
//     let list = [...items];

//     if (favoritesOnly) list = list.filter((i) => i.isFavorite);
//     if (statusFilter !== "all")
//       list = list.filter((i) => (i.status || "unread") === statusFilter);

//     list.sort((a, b) => {
//       const aTitle = (a.title || "").toLowerCase();
//       const bTitle = (b.title || "").toLowerCase();
//       const aDate = a.dateAdded || 0;
//       const bDate = b.dateAdded || 0;

//       switch (sortBy) {
//         case "titleAsc":
//           return aTitle.localeCompare(bTitle);
//         case "titleDesc":
//           return bTitle.localeCompare(aTitle);
//         case "dateAsc":
//           return aDate - bDate;
//         case "dateDesc":
//         default:
//           return bDate - aDate;
//       }
//     });

//     return list;
//   }, [items, favoritesOnly, statusFilter, sortBy]);

//   if (items.length === 0) {
//     return (
//       <>
//         <h1>Library</h1>
//         <p>
//           Your library is empty. Go to <Link to="/search">Search</Link> to add
//           books.
//         </p>
//       </>
//     );
//   }

//   return (
//     <>
//       <h1>Library</h1>

//       {/* Controls */}
//       <div
//         style={{
//           display: "flex",
//           gap: 12,
//           flexWrap: "wrap",
//           alignItems: "center",
//           margin: "12px 0",
//           padding: 12,
//           border: "1px solid #ddd",
//           borderRadius: 10,
//         }}
//       >
//         <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
//           Status:
//           <select
//             value={statusFilter}
//             onChange={(e) => setStatusFilter(e.target.value)}
//           >
//             <option value="all">all</option>
//             <option value="unread">unread</option>
//             <option value="reading">reading</option>
//             <option value="completed">completed</option>
//           </select>
//         </label>

//         <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
//           <input
//             type="checkbox"
//             checked={favoritesOnly}
//             onChange={(e) => setFavoritesOnly(e.target.checked)}
//           />
//           Favorites only
//         </label>

//         <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
//           Sort:
//           <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//             <option value="dateDesc">date (newest)</option>
//             <option value="dateAsc">date (oldest)</option>
//             <option value="titleAsc">title (A → Z)</option>
//             <option value="titleDesc">title (Z → A)</option>
//           </select>
//         </label>

//         <div style={{ marginLeft: "auto", opacity: 0.8 }}>
//           Showing: <strong>{visibleItems.length}</strong> / {items.length}
//         </div>
//       </div>

//       {/* Grid */}
//       {visibleItems.length === 0 ? (
//         <p>No items match the selected filters.</p>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
//             gap: 14,
//           }}
//         >
//           {visibleItems.map((item) => (
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

//                   <button onClick={() => toggleFavorite(item.id)}>
//                     {item.isFavorite ? "★" : "☆"}
//                   </button>
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
   - logic sama persis
   ========================= */

export default function Library() {
  const { items, removeItem, toggleFavorite, updateItem } = useLibrary();

  const [statusFilter, setStatusFilter] = useState("all");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [sortBy, setSortBy] = useState("dateDesc");

  const visibleItems = useMemo(() => {
    let list = [...items];

    if (favoritesOnly) list = list.filter((i) => i.isFavorite);
    if (statusFilter !== "all")
      list = list.filter((i) => (i.status || "unread") === statusFilter);

    list.sort((a, b) => {
      const aTitle = (a.title || "").toLowerCase();
      const bTitle = (b.title || "").toLowerCase();
      const aDate = a.dateAdded || 0;
      const bDate = b.dateAdded || 0;

      switch (sortBy) {
        case "titleAsc":
          return aTitle.localeCompare(bTitle);
        case "titleDesc":
          return bTitle.localeCompare(aTitle);
        case "dateAsc":
          return aDate - bDate;
        case "dateDesc":
        default:
          return bDate - aDate;
      }
    });

    return list;
  }, [items, favoritesOnly, statusFilter, sortBy]);

  if (items.length === 0) {
    return (
      <>
        <h1>Library</h1>
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
            Your library is empty. Go to <Link to="/search">Search</Link> to add
            books.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Library</h1>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
          margin: "12px 0",
          padding: 12,
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: 12,
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(2px)",
        }}
      >
        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ fontWeight: 600 }}>Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ padding: "6px 8px", borderRadius: 8 }}
          >
            <option value="all">all</option>
            <option value="unread">unread</option>
            <option value="reading">reading</option>
            <option value="completed">completed</option>
          </select>
        </label>

        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            type="checkbox"
            checked={favoritesOnly}
            onChange={(e) => setFavoritesOnly(e.target.checked)}
          />
          <span style={{ fontWeight: 600 }}>Favorites only</span>
        </label>

        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ fontWeight: 600 }}>Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ padding: "6px 8px", borderRadius: 8 }}
          >
            <option value="dateDesc">date (newest)</option>
            <option value="dateAsc">date (oldest)</option>
            <option value="titleAsc">title (A → Z)</option>
            <option value="titleDesc">title (Z → A)</option>
          </select>
        </label>

        <div style={{ marginLeft: "auto", opacity: 0.9, fontSize: 14 }}>
          Showing: <strong>{visibleItems.length}</strong> / {items.length}
        </div>
      </div>

      {/* Grid */}
      {visibleItems.length === 0 ? (
        <div
          style={{
            padding: 14,
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: 12,
            background: "rgba(255,255,255,0.75)",
          }}
        >
          No items match the selected filters.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 14,
          }}
        >
          {visibleItems.map((item) => (
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
                    title={item.isFavorite ? "Unfavorite" : "Favorite"}
                  >
                    {item.isFavorite ? "★" : "☆"}
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
