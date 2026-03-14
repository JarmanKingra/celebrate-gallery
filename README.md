# Celebrare Photo Gallery – Frontend Assignment

This project is a **React + Vite + Tailwind CSS photo gallery application** built as part of the Celebrare Frontend Intern pre-screening assignment.

The app fetches photos from a public API, displays them in a responsive grid, allows users to search photos by author name, and mark photos as favourites with persistent storage.

---

## 🚀 Features

* **Fetch Photos from API**
  Loads 30 photos from the Picsum Photos API on page load.

* **Responsive Grid Layout**

  * Desktop → 4 columns
  * Tablet → 2 columns
  * Mobile → 1 column

* **Real-time Search Filter**
  Filter photos by author name instantly without making additional API calls.

* **Favourite System (useReducer)**
  Photos can be marked as favourites using a reducer-based state management approach.

* **Persistence with localStorage**
  Favourite photos remain saved even after refreshing the page.

* **Custom React Hook**
  Data fetching logic is separated using a custom hook:

  `useFetchPhotos`

* **Performance Optimizations**

  * `useCallback` used for memoizing the search handler
  * `useMemo` used to optimize filtering logic

* **Loading State**
  A colorful animated loader is displayed while photos are being fetched.

---

## 🛠 Tech Stack

* **React**
* **Vite**
* **Tailwind CSS**
* **JavaScript (ES6+)**

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd celebrare-photo-gallery
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 📂 Project Structure

```
src
 ├── components
 │   ├── Gallery.jsx
 │   ├── PhotoCard.jsx
 │   ├── SearchBar.jsx
 │   └── Loader.jsx
 │
 ├── hooks
 │   └── useFetchPhotos.js
 │
 ├── reducer
 │   └── favouriteReducer.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## 🔗 API Used

Picsum Photos API

```
https://picsum.photos/v2/list?limit=30
```

---

## 🎥 Demo

A screen recording demonstrating the application and explaining the code structure has been included as part of the assignment submission.

---

## 👨‍💻 Author

**Jarman Kingra**

BCA Student | MERN Stack Developer | Web Development Enthusiast

GitHub: https://github.com/jarmanKingra
