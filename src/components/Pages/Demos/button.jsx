// CustomButton.js
import React from "react";
import CustomButton from "../../common/Button/button"; 

const CustomButtonComponent = () => {
  const handleButtonClick = () => {
    alert("Button Clicked!");
  };
  return(
    <>
  <CustomButton
        variant="primary"
        href="https://example.com"
        target="_blank"
        size="lg"
        block
      >
        Visit Example.com
      </CustomButton>
      {/* Example without href */}
      <CustomButton
        variant="success"
        onClick={handleButtonClick}
        disabled={false}
        type="button"
        size="sm"
        block
        className="custom-style"
        id="uniqueButtonId"
        style={{ marginTop: "10px" }}
      >
        Click Me
      </CustomButton>
      </>
  )
};

export default CustomButtonComponent;

// // CustomButton.js
// import React from "react";

// const CustomButton = ({
//   variant,
//   onClick,
//   children,
//   disabled,
//   type,
//   size,
//   block,
//   href,
//   target,
//   className,
//   id,
//   style,
//   ...restProps
// }) => {
//   if (href) {
//     return (
//       <a
//         href={href}
//         target={target}
//         rel={target === "_blank" ? "noopener noreferrer" : undefined}
//         className={`custom-button ${className || ""}`}
//         id={id}
//         style={style}
//         {...restProps}
//       >
//         {children}
//       </a>
//     );
//   } else {
//     return (
//       <button
//         onClick={onClick}
//         disabled={disabled}
//         type={type || "button"}
//         className={`custom-button ${className || ""}`}
//         id={id}
//         style={style}
//         {...restProps}
//       >
//         {children}
//       </button>
//     );
//   }
// };

// export default CustomButton;
