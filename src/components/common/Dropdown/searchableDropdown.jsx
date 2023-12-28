import React, { useState, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";

const SearchableDropdown = ({
  options,
  onSelect,
  placeholder = "Select an option",
  className = "",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setSearchTerm("");
    setIsOpen(false);
    onSelect(option);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [options, searchTerm]
  );

  return (
    <div className={`searchable-dropdown ${className}`} ref={dropdownRef}>
      <div
        className={`dropdown-toggle ${isOpen ? "open" : ""}`}
        onClick={handleToggleDropdown}
      >
        {selectedOption || placeholder}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <ul>
            {filteredOptions.map((option) => (
              <li key={option} onClick={() => handleSelectOption(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

SearchableDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default SearchableDropdown;
