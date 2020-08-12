import React from "react";

const Search = ({ query, setQuery }) => (
  <section className="search">
    <form>
      <input
        type="text"
        className="form-control"
        placeholder="Search clients..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />
    </form>
  </section>
);

export default Search;
