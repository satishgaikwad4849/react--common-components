import React from "react";
// import Header from "./Header"; // Import your Header component

const Container = ({ children }) => {
  return (
    <div className="common_container">
      {/* <Header /> */}
      <div className="main-content">{children}</div>
      {/* <footer className="footer">Your Footer Content Here</footer> */}
    </div>
  );
};

export default Container;
