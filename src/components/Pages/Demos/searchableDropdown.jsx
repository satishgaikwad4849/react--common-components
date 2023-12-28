import React, { useState, useEffect, useRef, useMemo } from "react";
// import PropTypes from "prop-types";
import SearchableDropdown from "../../common/Dropdown/searchableDropdown";

const SearchableDropdownComponent = (
) => {
  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  const handleSelect = (option) => {
    console.log(`Selected option: ${option}`);
  };

  return (
    <SearchableDropdown
    options={options}
    onSelect={handleSelect}
    placeholder="Select a Favorite Fruit"
    className="custom-dropdown"
  />
  );
};

// SearchableDropdown.propTypes = {
//   options: PropTypes.array.isRequired,
//   onSelect: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
//   className: PropTypes.string,
// };

export default SearchableDropdownComponent;
