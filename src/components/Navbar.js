import React, { useState } from "react";

const Navbar = () => {
  const [sidebarStatus, setSidebarStatus]= useState(false);

  const showSidebar =()=>{
    if(sidebarStatus===true) setSidebarStatus(false);
    else setSidebarStatus(true);
  }
  return (
    <div class="hmsNavbar">
      <div class="navbar">
        <div className="navbar-hmsName">
          <a href="/">RegalStay</a>
        </div>
        <div class="navbar-itemlist">
          <ul className="navbar-navv">
            <li class="navbar-item"><a href="/">Home</a></li>
            <li class="navbar-item"><a href="/">About-Us</a></li>
            <li class="navbar-item"><a href="/">Services</a></li>
            <li class="navbar-item"><a href="/">Contact</a></li>
          </ul>
        </div>
        <div class="navbar-btn">
          <div class="loginBtn">
            <button>Get Started</button>
          </div>
          <i class={(sidebarStatus===true)?"fa-solid fa-xmark":"fa-solid fa-list"} onClick={showSidebar}></i>
        </div>
      </div>
      <div class={(sidebarStatus===true)?"dropdown_menu open":"dropdown_menu"}>
            <li><a href="/">Home</a></li>
            <li><a href="/">About-Us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact</a></li>
            <li><button>Get Started</button></li>
        </div>
    </div>
  );
};

export default Navbar;
