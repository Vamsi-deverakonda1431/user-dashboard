function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc"
      }}
    />
  );
}

export default SearchBar;