// CustomButton.js
import React from "react";
import CustomButton from "../../common/Button/button";
import Container from "../../common/container";
import ReusableCodeEditor from "../../common/codeEditor";

const CustomButtonComponent = () => {
  const handleButtonClick = () => {
    alert("Button Clicked!");
  };
  const initialValue = `function greet() {
    return "Hello, World!";
  }`;

  const customOptions = {
    theme: "github", // You can customize other options here
  };

  return (
    <>
    <div>
      <Container>
        <div>
        <ul style={{listStyle:'none', padding:0}}>
          <li style={{borderBottom:'0'}}>

            <h6>Button Without href</h6>
            <CustomButton
              variant="success"
              onClick={handleButtonClick}
              disabled={false}
              type="button"
              size="sm"
              block
              className="custom-style"
              id="uniqueButtonId"
            >
              Button
            </CustomButton>
            <h6 style={{ marginTop: '15px' }}>Button With href</h6>
            <CustomButton
              variant="primary"
              href="https://example.com"
              target="_blank"
              size="sm"
              block
            >
              Visit Example.com
            </CustomButton>
          </li>
        </ul>
        </div>
        {/* Example without href */}

        <ReusableCodeEditor initialValue={CustomButton.toString()} options={customOptions} style={{ width: "100%", height: "500px", margin: "10px auto", zIndex:0}} />
      </Container>
      </div>
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
