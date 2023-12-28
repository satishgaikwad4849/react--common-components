import React, { useState } from "react";
import PropTypes from "prop-types";
import "./customDropdown.css";
const CustomDropdown = ({
  options,
  onSelect,
  defaultOption,
  className,
  style,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption || "");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`custom-dropdown ${className || ""}`} style={style}>
      <div
        className={`dropdown-toggle ${isOpen ? "open" : ""}`}
        onClick={handleToggleDropdown}
      >
        {selectedOption || defaultOption || "Select an option"}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <ul>
            {options.map((option) => (
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

CustomDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default CustomDropdown;
