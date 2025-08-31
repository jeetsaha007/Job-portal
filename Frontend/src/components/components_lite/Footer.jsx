import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "auto",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f1f1f1",
        width: "100%",
      }}
    >
      <p>© 2025 Sunfire Sensei. All rights reserved.</p>
      <p>
        <Link to="/PrivacyPolicy">Privacy Policy</Link> |
        <Link to="/TermsofService"> Terms of Service</Link>
      </p>
    </div>
  );
};

export default Footer;