import { useState } from "react";
import { useLibrary } from "../context/LibraryContext";
import mapGoogleBookToItem from "../utils/mapGoogleBookToItem";

/* =========================
   OLD (working)
   ========================= */

// export default function Search() {
//   const { items, addItem } = useLibrary();

//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [hasSearched, setHasSearched] = useState(false);

//   async function handleSearch(e) {
//     e.preventDefault();

//     const q = query.trim();
//     if (!q) {
//       setError("Please enter a search keyword.");
//       return;
//     }

//     setHasSearched(true);
//     setLoading(true);
//     setError("");
//     setResults([]);

//     try {
//       const res = await fetch(
//         `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
//           q
//         )}&maxResults=12`
//       );

//       if (!res.ok) {
//         throw new Error(`Request failed: ${res.status}`);
//       }

//       const data = await res.json();
//       const mapped = (data.items || []).map(mapGoogleBookToItem);
//       setResults(mapped);
//     } catch (err) {
//       setError(err?.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   function isAlreadyInLibrary(id) {
//     return items.some((item) => item.id === id);
//   }

//   return (
//     <>
//       <h1>Search</h1>

//       <form onSubmit={handleSearch} style={{ display: "flex", gap: 8 }}>
//         <input
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search books (e.g. harry potter)"
//           style={{ flex: 1, padding: 8 }}
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Searching..." : "Search"}
//         </button>
//       </form>

//       {error && <p style={{ marginTop: 12, color: "crimson" }}>{error}</p>}

//       {!loading && !error && results.length === 0 && (
//         <p style={{ marginTop: 12 }}>
//           {hasSearched
//             ? "No results found. Try a different keyword."
//             : "Type a keyword above and click Search."}
//         </p>
//       )}

//       <ul style={{ marginTop: 12 }}>
//         {results.map((book) => (
//           <li key={book.id} style={{ marginBottom: 12 }}>
//             <div style={{ display: "flex", gap: 12 }}>
//               {book.thumbnail ? (
//                 <img
//                   src={book.thumbnail}
//                   alt={book.title}
//                   style={{ width: 70, height: "auto" }}
//                 />
//               ) : (
//                 <div style={{ width: 70 }} />
//               )}

//               <div style={{ flex: 1 }}>
//                 <div style={{ fontWeight: 700 }}>{book.title}</div>
//                 <div>{book.author}</div>

//                 <button
//                   style={{ marginTop: 6 }}
//                   onClick={() => addItem(book)}
//                   disabled={isAlreadyInLibrary(book.id)}
//                 >
//                   {isAlreadyInLibrary(book.id)
//                     ? "Added to Library"
//                     : "Add to Library"}
//                 </button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

/* =========================
   NEW (polished UI only)
   - logic sama
   ========================= */

export default function Search() {
  const { items, addItem } = useLibrary();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();

    const q = query.trim();
    if (!q) {
      setError("Please enter a search keyword.");
      return;
    }

    setHasSearched(true);
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          q
        )}&maxResults=12`
      );

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const data = await res.json();
      const mapped = (data.items || []).map(mapGoogleBookToItem);
      setResults(mapped);
    } catch (err) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function isAlreadyInLibrary(id) {
    return items.some((item) => item.id === id);
  }

  return (
    <>
      <h1>Search</h1>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          marginTop: 12,
          padding: 12,
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: 12,
          background: "rgba(255,255,255,0.75)",
          flexWrap: "wrap",
        }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books (e.g. harry potter)"
          style={{
            flex: 1,
            minWidth: 220,
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.12)",
            outline: "none",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            border: "1px solid rgba(0,0,0,0.12)",
            background: "rgba(255,255,255,0.9)",
            borderRadius: 10,
            padding: "10px 14px",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: 700,
          }}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Feedback */}
      {error && (
        <div
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 12,
            border: "1px solid rgba(220, 20, 60, 0.35)",
            background: "rgba(220, 20, 60, 0.08)",
            color: "crimson",
          }}
        >
          {error}
        </div>
      )}

      {!loading && !error && results.length === 0 && (
        <div
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,0.1)",
            background: "rgba(255,255,255,0.75)",
          }}
        >
          {hasSearched
            ? "No results found. Try a different keyword."
            : "Type a keyword above and click Search."}
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <div style={{ opacity: 0.9, marginBottom: 10 }}>
            Results: <strong>{results.length}</strong>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {results.map((book) => {
              const added = isAlreadyInLibrary(book.id);

              return (
                <div
                  key={book.id}
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
                  {book.thumbnail ? (
                    <img
                      src={book.thumbnail}
                      alt={book.title}
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

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 900,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      title={book.title}
                    >
                      {book.title}
                    </div>

                    <div
                      style={{
                        fontSize: 13,
                        opacity: 0.85,
                        marginTop: 4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      title={book.author}
                    >
                      {book.author}
                    </div>

                    <button
                      type="button"
                      onClick={() => addItem(book)}
                      disabled={added}
                      style={{
                        marginTop: 10,
                        border: "1px solid rgba(0,0,0,0.12)",
                        background: added
                          ? "rgba(0,0,0,0.06)"
                          : "rgba(255,255,255,0.9)",
                        borderRadius: 10,
                        padding: "8px 10px",
                        cursor: added ? "not-allowed" : "pointer",
                        fontWeight: 700,
                        width: "fit-content",
                      }}
                    >
                      {added ? "Added to Library" : "Add to Library"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
