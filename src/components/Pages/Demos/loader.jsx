// Loader.js
import React from "react";
import Loader from "../../common/Loader/loader";

const LoaderComponent = () => {
 return(
  <>
  <Loader
  size="50px"
  color="#3498db"
  type="spinner"
  duration="1s"
  className="spinner"
  // style={{ border: "2px solid #3498db", borderRadius: "50%" }}
/>
<Loader
  text="Loading..."
  size="50px"
  color="#3498db"
  // style={{ border: "2px solid #3498db", borderRadius: "50%" }}
/>
</>
 )
};

export default LoaderComponent;
