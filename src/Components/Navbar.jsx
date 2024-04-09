import React from "react";

function Navbar() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="navbar">
      <h1>Recipe App</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#end" onClick={scrollToBottom}>End of Page</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;