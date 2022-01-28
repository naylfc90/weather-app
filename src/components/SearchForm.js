import React from "react";
import PropTypes from "prop-types";

import "../styles/SearchForm.css";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter a city"
        onChange={handleInputChange}
        value={searchText}
      />

      <button className="search-form__button" type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
