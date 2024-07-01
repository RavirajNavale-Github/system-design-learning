import React from "react";

const IframeComponent = () => {
  return (
    <div>
      <h1>Iframe Protection Example</h1>
      <iframe
        // src="https://www.example.com"
        src="https://www.google.com"
        // src="https://www.twitter.com"
        sandbox="allow-scripts"
        style={{ border: "none", width: "100%", height: "500px",}}
        title="example"
      ></iframe>
    </div>
  );
};

export default IframeComponent;
