export const favouriteReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAVOURITE":
      const exists = state.find((photo) => photo.id === action.payload.id);
      if (exists) {
        return state.filter((photo) => photo.id !== action.payload.id);
      } else {
        return [...state, action.payload];
      }
    default:
      return state;
  }
};
