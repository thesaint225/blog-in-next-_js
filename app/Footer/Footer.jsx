import React from "react";

const Footer = () => {
  return (
    // Footer container with styles for background color, text color, and padding
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
      }}
    >
      {/* Contact section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5px",
        }}
      >
        {/* Contact heading */}
        <h3 style={{ margin: "0", marginRight: "10px" }}>Contact:</h3>
        {/* Contact details */}
        <p style={{ margin: "0" }}>
          Phone: +1 (123) 456-789 | Email: info@example.com
        </p>
      </div>

      {/* Year section */}
      <div>
        {/* Year text */}
        <p>&copy; {new Date().getFullYear()} My Blog</p>
      </div>
    </footer>
  );
};

export default Footer;
