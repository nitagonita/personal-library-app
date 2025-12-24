import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Library from "./pages/Library";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";

import bg from "./assets/library-bg.png";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* overlay supaya teks tetap kebaca */}
      <div
        style={{
          minHeight: "100vh",
          background: "rgba(255, 255, 255, 0.55)",
          padding: "16px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Navigation />

          <Routes>
            <Route path="/" element={<Navigate to="/library" replace />} />
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/item/:id" element={<ItemDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
