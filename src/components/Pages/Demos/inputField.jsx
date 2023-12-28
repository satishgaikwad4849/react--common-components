import React,{useState} from "react";
import TextInput from "../../common/Input/inputField";

const TextInputComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const handleBlur = () => {
    console.log("Input blurred");
  };
  
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 3) {
      setFirstNameError("First name must be at least 3 characters long");
    } else {
      setFirstNameError("");
    }
  };
  return (
    <div>
       <TextInput
        name="firstname"
        placeholder="Enter your first name"
        value={firstName}
        onChange={handleFirstNameChange}
        required={true}
        disabled={false}
        maxLength={50}
        pattern="[A-Za-z ]+"
        autoFocus={true}
        className="input-field"
        id="first-name-input"
        onBlur={handleBlur}
        error={firstNameError}
        label="First Name"
      />
    </div>
  );
};

export default TextInputComponent;
