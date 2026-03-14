import { useCallback, useMemo, useReducer, useState, useEffect } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";
import { favouriteReducer } from "../reducer/favouriteReducer";
import Loader from "./Loader";

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchQuery, setSearchQuery] = useState("");
  const [favourites, dispatch] = useReducer(favouriteReducer, [], () => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleSearch = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [photos, searchQuery]);

 if (loading) {
  return <Loader />;
}
  if (error) {
    return <div className="text-center text-danger text-xl">{error}</div>;
  }

  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">Photo Gallery</h1>

        <p className="text-secondary">Browse photos and mark your favourites</p>
      </div>

      <SearchBar value={searchQuery} onChange={handleSearch} />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            dispatch={dispatch}
            favourites={favourites}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
