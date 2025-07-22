import React from "react";

const Footer = () => (
  <footer style={{
    background: "#222",
    color: "#fff",
    padding: "2rem 0",
    textAlign: "center",
    marginTop: "auto",
    fontSize: "1rem"
  }}>
    <div style={{ marginBottom: "1rem" }}>
      <a
        href="https://github.com/sampu-kc"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#fff", margin: "0 1rem", textDecoration: "none" }}
      >
        GitHub
      </a>
      <a
        href="mailto:sampadakc528@gmail.com"
        style={{ color: "#fff", margin: "0 1rem", textDecoration: "none" }}
      >
        Email
      </a>
    </div>
    <div>
      &copy; {new Date().getFullYear()} Sampada KC. All rights reserved.
    </div>
  </footer>
);

export default Footer;