import React, { useState } from "react";
// import PropTypes from "prop-types";
import CustomDropdown from "../../common/Dropdown/customDropdown";

const CustomDropdownComponent = () => {
  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  const handleSelectfromOptions = (option) => {
    console.log(`Selected value: ${option}`);
  };
  return(
    <CustomDropdown
        options={options}
        onSelect={handleSelectfromOptions}
        defaultOption="Select a color"
        className="custom-dropdown-style"
        style={{ border: "1px solid #ccc", padding: "8px" }}
      />
  )
}

// CustomDropdown.propTypes = {
//   options: PropTypes.array.isRequired,
//   onSelect: PropTypes.func.isRequired,
//   defaultOption: PropTypes.string,
//   className: PropTypes.string,
//   style: PropTypes.object,
// };

export default CustomDropdownComponent;
