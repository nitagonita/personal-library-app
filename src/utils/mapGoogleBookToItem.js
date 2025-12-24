export default function mapGoogleBookToItem(apiItem) {
  const volume = apiItem.volumeInfo || {};

  const title = volume.title || "Untitled";
  const author = Array.isArray(volume.authors)
    ? volume.authors.join(", ")
    : "Unknown";

  const thumbnail = volume.imageLinks?.thumbnail || "";
  const description = volume.description || "";
  const genre = Array.isArray(volume.categories) ? volume.categories[0] : "";

  return {
    id: `gb_${apiItem.id}`, // prefix biar unik
    title,
    author,
    thumbnail,
    description,
    genre,
    isFavorite: false,
    status: "unread", // konsisten dengan Library
    rating: 0,
    dateAdded: Date.now(),
  };
}
