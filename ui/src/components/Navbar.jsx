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
import TorchToggle from "./toggleMode";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Add", path: "/add-item" },
    { name: "Items", path: "/items-list" },
    { name: "Stock", path: "/stock" },
    { name: "Sold", path: "/sold" },
    { name: "Profit", path: "/profit" },
  ];

  return (
    <nav className={LIGHT_MODE_NAVBAR.NAV}>
      <div className={LIGHT_MODE_NAVBAR.DIV1}>
        <div className={LIGHT_MODE_NAVBAR.DIV2}>
          <Link to="/" className={LIGHT_MODE_NAVBAR.LINK}>
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
                    ? DESKTOP_NAVBAR.linkActive
                    : DESKTOP_NAVBAR.linkInactive
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

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
                  stroke="currentColor"
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
                  stroke="currentColor"
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
        <div className={MOBILE_NAVBAR.menuContainer}>
          <div className={MOBILE_NAVBAR.linkWrapper}>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`${MOBILE_NAVBAR.linkBase} ${
                  location.pathname === link.path
                    ? MOBILE_NAVBAR.linkActive
                    : MOBILE_NAVBAR.linkInactive
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <TorchToggle />
    </nav>
  );
};

export default Navbar;
