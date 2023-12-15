import { useState } from "react";

import "./Header.css";
import "./App.jsx";


const uriList = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  // {
  //   name: "Order",
  //   path: "/order",
  // },
  {
    name: "Photo",
    path: "/photo",
  },
];

function Header({ setPage, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    return menuOpen ? closeMenu() : openMenu();
  };

  const openThemeMenu = () => {
    setThemeMenuOpen(true);
  };

  const closeThemeMenu = () => {
    setThemeMenuOpen(false);
  };

  const toggleThemeMenu = () => {
    return themeMenuOpen ? closeThemeMenu() : openThemeMenu();
  };

  const menuStyle = menuOpen ? "navbar__menu--open" : "";
  const menuIconStyle = menuOpen ? "gg-close" : "gg-menu-left";

  const themeMenuStyle = themeMenuOpen ? "navbar__theme-menu--open" : "";
  const themeMenuIconStyle = themeMenuOpen ? "gg-close" : "gg-chevron-down";

  const navList = uriList.map((item) => {
    return (
      
      <li className="navbar__item" key={item.name}>
        <a
          href={item.path}
          className="navbar__link"
          onClick={(event) => {
            event.preventDefault();
            setPage(item.path);
            closeMenu();
            closeThemeMenu();
          }}
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    // Header Component
    <header className="header">
      
      <nav className="navbar">
      <h1 className="header-title" aria-label='Header title'>
        Craft Beer
      </h1>
        <a
          href="/"
          className="navbar__logo-link"
          aria-label="Homepage"
          onClick={(event) => {
            event.preventDefault();
            setPage("/");
            closeMenu();
            closeThemeMenu();
          }}
        >
          <i className="gg-beer navbar__logo"></i>
        </a>
        <ul className={`navbar__menu ${menuStyle}`}>
          {navList}
          <li className="navbar__item navbar__theme-dropdown">
            <button
              className={`navbar__button ${
                themeMenuOpen ? "navbar__button--open" : ""
              }`}
              onClick={() => toggleThemeMenu()}
              aria-label={
                themeMenuOpen ? "Close Theme Menu" : "Open Theme Menu"
              }
            >
              🌗  {" "}
              <i className={`navbar__button-icon ${themeMenuIconStyle}`} />
            </button>
            <ul className={`navbar__theme-menu ${themeMenuStyle}`}>
              <li className="navbar__theme-item">
                <button
                  className="navbar__theme-button"
                  onClick={() => {
                    closeThemeMenu();
                    closeMenu();
                    setTheme("light");
                    
                  }}
                >
                  Light
                </button>
              </li>
              <li className="navbar__theme-item">
                <button
                  className="navbar__theme-button"
                  onClick={() => {
                    closeThemeMenu();
                    closeMenu();
                    setTheme("dark");
                    
                  }}
                >
                  Dark
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <button
          className="navbar__menu-button"
          aria-label={
            menuOpen ? "Close Navigation Menu" : "Open Navigation Menu"
          }
          onClick={() => {
            toggleMenu();
            closeThemeMenu();
          }}
        >
          <i className={`navbar__menu-icon ${menuIconStyle}`} />
          
        </button>
      </nav>
      
    </header>
  );
}

export default Header;