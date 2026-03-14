import React from "react";
function SearchBar({ value, onChange }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by author.."
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-surface rounded-xl outline-none focus:ring-2 focus:ring-surface bg-primary"
      />
    </div>
  );
}
export default React.memo(SearchBar);
