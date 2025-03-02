import React from "react";

const Navbar = () => {
  return (
    <div class="hmsNavbar">
      <div class="navbar">
        <div className="navbar-hmsName">
          <a href="/">RegalStay</a>
        </div>
        <div class="navbar-itemlist">
          <ul className="navbar-navv">
            <li class="navbar-item">Home</li>
            <li class="navbar-item">About-Us</li>
            <li class="navbar-item">Services</li>
            <li class="navbar-item">Contact</li>
          </ul>
        </div>
        <div class="navbar-btn">
          <div class="loginBtn">
            <button>Login</button>
          </div>
          <div class="signupBtn">
            <button>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
