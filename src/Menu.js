import React, { useState } from "react";

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <menu className="menu-container">
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search..."
        />
        <img
          src="../images/magnifying-glass-solid.svg"
          className="seacrh--icon"
          alt="magnifying glass"
        />
      </div>
      <ul className="menu--items">
        <li>Rooms</li>
        <li>Mansions</li>
        <li>BeachFront</li>
        <li>Amazing Views</li>
        <li>Tiny Homes</li>
        <li>Boats</li>
        <li>Trending</li>
      </ul>
    </menu>
  );
}
