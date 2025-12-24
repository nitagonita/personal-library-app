import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>404 – Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist or may have been moved.</p>

      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <Link to="/library">← Back to Library</Link>
        <Link to="/search">Go to Search</Link>
      </div>
    </>
  );
}
