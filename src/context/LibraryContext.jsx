import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LibraryContext = createContext();

export function LibraryProvider({ children }) {
  const [items, setItems] = useLocalStorage("library-items", []);

  // CREATE
  function addItem(item) {
    setItems((prev) => [...prev, item]);
  }

  // DELETE
  function removeItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  // UPDATE (generic)
  function updateItem(id, patch) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...patch } : item))
    );
  }

  // TOGGLE FAVORITE
  function toggleFavorite(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  }

  return (
    <LibraryContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateItem,
        toggleFavorite,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error("useLibrary must be used inside LibraryProvider");
  }
  return context;
}
