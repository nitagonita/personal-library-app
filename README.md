1️⃣ README.md (sudah diisi: Live Demo + Author)


# Personal Library App

A React application for managing your personal book collection.  
Users can search for books using an external API, add them to their library, mark favorites, track reading status, and view detailed information for each item.

This project demonstrates React state management using hooks, Context API, immutable updates, routing, API integration, and localStorage persistence.

---

## Live Demo

👉 https://PERSONAL-LIBRARY-APP.vercel.app  
_(URL will be updated after deployment on Vercel)_

---

## Features

- Search books using the **Google Books API**
- Add books to a personal library
- View library items in a responsive grid layout
- Mark and unmark items as favorites
- Filter by reading status (unread, reading, completed)
- Sort library by date added or title
- Dedicated Favorites page
- Detailed item view with thumbnail and description
- Persistent data using `localStorage`
- Client-side routing (no page reloads)
- Clean and user-friendly UI

---

## Technologies Used

- **React 18**
- **Vite**
- **React Router DOM**
- **Context API**
- **Google Books API**
- **Browser localStorage**

---

## Project Structure

src/
├── assets/
├── components/
├── context/
├── hooks/
├── pages/
├── utils/
├── App.jsx
└── main.jsx

---

## Core Concepts Demonstrated

- React Hooks: `useState`, `useEffect`, `useContext`, `useMemo`
- Context API for shared state
- Immutable state updates
- Client-side routing
- API integration with loading & error handling
- LocalStorage persistence
- Clean component architecture

---

## API Used

### Google Books API

- Endpoint: https://www.googleapis.com/books/v1/volumes
- Example:

https://www.googleapis.com/books/v1/volumes?q=react

- No API key required

---

## Getting Started (Local Setup)

````bash
npm install
npm run dev


Open:

http://localhost:5173

Deployment

This project is deployed using Vercel.

Build command:

npm run build


Output directory:

dist

Author

Nita

License

This project is for educational purposes.


---

## 2️⃣ Deploy to **Vercel** (via GitHub)

### ✅ Check
- Project  **GitHub repo** ✔️
- `npm run dev`  ✔️
- No API key ✔️

---

### STEP 1 — Push to GitHub
Project folder, run :

```bash
git status
git add .
git commit -m "Final React library app"
git push
````
