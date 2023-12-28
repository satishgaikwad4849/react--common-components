// CustomButton.js
import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = ({
  variant,
  onClick,
  children,
  disabled,
  type,
  size,
  block,
  href,
  target,
  className, // Additional class for styling
  id, // Unique identifier
  style, // Inline styles
  ...restProps // Catch-all for any other unspecified props
}) => {
  if (href) {
    return (
      <Button
        variant={variant}
        href={href}
        target={target}
        size={size}
        block={block}
        className={className}
        id={id}
        style={style}
        {...restProps}
      >
        {children}
      </Button>
    );
  } else {
    return (
      <Button
        variant={variant}
        onClick={onClick}
        disabled={disabled}
        type={type}
        size={size}
        block={block}
        className={className}
        id={id}
        style={style}
        {...restProps}
      >
        {children}
      </Button>
    );
  }
};

export default CustomButton;

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
