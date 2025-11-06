import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import sstrendscollection from "../assets/TrendsCollection2.png";
import { SS_TRENDS_COLLECTION } from "../utilities/constants";
import {
  DESKTOP_NAVBAR,
  LIGHT_MODE_NAVBAR,
  LOGO,
  MOBILE_NAVBAR,
} from "../features/mode/lightMode";
import {
  DARK_MODE,
  DARK_MODE_NAVBAR,
  DARK_MODE_MOBILE_NAVBAR,
} from "../features/mode/darkMode";
import TorchToggle from "./toggleMode";
import { useTheme } from "../context/useTheme";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isDarkMode = useTheme();

  const links = [
    { name: "Add", path: "/add-item" },
    { name: "Items", path: "/items-list" },
    { name: "Stock", path: "/stock" },
    { name: "Sold", path: "/sold" },
    { name: "Profit", path: "/profit" },
  ];

  return (
    <nav
      className={
        isDarkMode.darkMode ? DARK_MODE_NAVBAR.NAV : LIGHT_MODE_NAVBAR.NAV
      }
    >
      <div
        className={
          isDarkMode.darkMode ? DARK_MODE_NAVBAR.DIV1 : LIGHT_MODE_NAVBAR.DIV1
        }
      >
        <div
          className={
            isDarkMode.darkMode ? DARK_MODE_NAVBAR.DIV2 : LIGHT_MODE_NAVBAR.DIV2
          }
        >
          <Link
            to="/"
            className={
              isDarkMode.darkMode
                ? DARK_MODE_NAVBAR.LINK
                : LIGHT_MODE_NAVBAR.LINK
            }
          >
            <img
              src={sstrendscollection}
              alt="SS Trends Collection logo"
              className={LOGO}
            />
          </Link>

          {/* Desktop Links */}
          <div className={DESKTOP_NAVBAR.container}>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${DESKTOP_NAVBAR.linkBase} ${
                  location.pathname === link.path
                    ? isDarkMode.darkMode
                      ? DARK_MODE_NAVBAR.DESKTOP_LINK_ACTIVE
                      : DESKTOP_NAVBAR.DESKTOP_LINK_ACTIVE
                    : isDarkMode.darkMode
                    ? DARK_MODE_NAVBAR.DESKTOP_LINK_INACTIVE
                    : DESKTOP_NAVBAR.DESKTOP_LINK_INACTIVE
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <TorchToggle />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={MOBILE_NAVBAR.button}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke={isDarkMode.darkMode ? "white" : "black"}
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke={isDarkMode.darkMode ? "white" : "black"}
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={
            isDarkMode.darkMode
              ? DARK_MODE_MOBILE_NAVBAR.menuContainer
              : MOBILE_NAVBAR.menuContainer
          }
        >
          <div
            className={
              isDarkMode.darkMode
                ? DARK_MODE_MOBILE_NAVBAR.linkWrapper
                : MOBILE_NAVBAR.linkWrapper
            }
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`${MOBILE_NAVBAR.linkBase} ${
                  location.pathname === link.path
                    ? isDarkMode.darkMode
                      ? DARK_MODE_MOBILE_NAVBAR.LINK_ACTIVE
                      : MOBILE_NAVBAR.linkActive
                    : isDarkMode.darkMode
                    ? DARK_MODE_MOBILE_NAVBAR.LINK_INACTIVE
                    : MOBILE_NAVBAR.linkInactive
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
