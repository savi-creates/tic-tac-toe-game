import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Coded by{" "}
        <a
          href="https://github.com/savi-creates"
          target="_blank"
          rel="noreferrer"
        >
          Savannah Andresson
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/savi-creates/tic-tac-toe-game"
          target="_blank"
          rel="noreferrer"
        >
          is open-sourced on GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
