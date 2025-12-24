import { NavLink } from "react-router-dom";

/* =========================
   OLD (working, simple)
   ========================= */

// const linkStyle = ({ isActive }) => ({
//   fontWeight: isActive ? "700" : "400",
//   textDecoration: "none",
// });

// export default function Navigation() {
//   return (
//     <nav style={{ display: "flex", gap: "12px", padding: "12px 0" }}>
//       <NavLink to="/library" style={linkStyle}>
//         Library
//       </NavLink>
//       <NavLink to="/search" style={linkStyle}>
//         Search
//       </NavLink>
//       <NavLink to="/favorites" style={linkStyle}>
//         Favorites
//       </NavLink>
//     </nav>
//   );
// }

/* =========================
   NEW (polished UI only)
   - logic sama
   - routing sama
   - cuma rapikan tampilan
   ========================= */

const linkStyle = ({ isActive }) => ({
  fontWeight: isActive ? "700" : "500",
  textDecoration: "none",
  padding: "6px 10px",
  borderRadius: 8,
  color: "#222",
  backgroundColor: isActive ? "rgba(0,0,0,0.06)" : "transparent",
});

export default function Navigation() {
  return (
    <nav
      style={{
        display: "flex",
        gap: 12,
        padding: "12px 0",
        marginBottom: 12,
        borderBottom: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <NavLink to="/library" style={linkStyle}>
        Library
      </NavLink>

      <NavLink to="/search" style={linkStyle}>
        Search
      </NavLink>

      <NavLink to="/favorites" style={linkStyle}>
        Favorites
      </NavLink>
    </nav>
  );
}
