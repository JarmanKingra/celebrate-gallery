function PhotoCard({ photo, dispatch, favourites }) {
  const isFavourite = favourites.some((fav) => fav.id === photo.id);
  const toggleFavourite = () => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: photo,
    });
  };

  return (
    // <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-sm">
    <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-56 object-cover"
      />

      <div className="p-3 flex items-center justify-between">
        <p className="text-sm text-secondary">{photo.author}</p>

        <button
          onClick={toggleFavourite}
          className={`text-xl cursor-pointer transition-transform duration-200 hover:text-danger ${
            isFavourite ? "text-danger scale-125" : "text-secondary scale-100"
          }`}
        >
          ♥
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;
