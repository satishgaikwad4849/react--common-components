// TextInput.js
// TextInput.js
// import React from "react";
// import Form from "react-bootstrap/Form";

// const TextInput = ({
//   name,
//   placeholder,
//   value,
//   onChange,
//   required,
//   disabled,
//   maxLength,
//   pattern,
//   autoFocus,
//   className,
//   id,
//   onBlur,
//   error,
//   label,
// }) => {
//   return (
//     <Form.Group>
//       {label && <Form.Label>{label}</Form.Label>}
//       <Form.Control
//         type="text"
//         name={name}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         required={required}
//         disabled={disabled}
//         maxLength={maxLength}
//         pattern={pattern}
//         autoFocus={autoFocus}
//         className={className}
//         id={id}
//         onBlur={onBlur}
//       />
//       {error && <Form.Text className="text-danger">{error}</Form.Text>}
//     </Form.Group>
//   );
// };

// export default TextInput;

import React from "react";

const TextInput = ({
  name,
  placeholder,
  value,
  onChange,
  required,
  disabled,
  maxLength,
  pattern,
  autoFocus,
  className,
  id,
  onBlur,
  error,
  label,
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
        pattern={pattern}
        autoFocus={autoFocus}
        className={className}
        id={id}
        onBlur={onBlur}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default TextInput;
