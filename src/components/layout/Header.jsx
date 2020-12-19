import React from "react";

function Header() {
  return <header style={headerStyle}>CaldAR</header>;
}

const headerStyle = {
  background: "#094455",
  textAlign: "center",
  padding: "5px",
  margin: "10px 0",
  fontSize: "42px",
  color: "#ffffff",
  fontWeight: "700",
};

export default Header;
