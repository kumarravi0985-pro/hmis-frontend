import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import "./MenuBar.css";
import logo from "../images/linklogo.png";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [openDropdown, setOpenDropdown] = useState(null); // reports dropdown
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Main menu structure
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Patient Registration", path: "/patientregistration" },
    { name: "OPD Billing", path: "/opd-billing" },
    { name: "Investigation Billing", path: "/investigation-billing" },
    {
      name: "Reports",
      path: "#",
      submenu: [
        { name: "Daily Collection", path: "/reports/daily-collection" },
        { name: "Doctor Accounts", path: "/reports/doctor-accounts" },
        { name: "PMJAY Report", path: "/reports/pmjay" },
      ],
    },
    { name: "Staff", path: "/staff" },
    { name: "Utilities", path: "/utilities" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  // Toggle dropdown menu (for both desktop + mobile)
  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="menu-bar">
      <div className="menu-bar-inner">
        {/* Logo */}
        <div className="menu-logo">
           <img src={logo} alt="logo" />
          <span>Picasoid HMIS</span>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <nav className="menu-items">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`${
                  location.pathname === item.path ? "active" : ""
                } ${item.submenu ? "has-submenu" : ""}`}
              >
                {item.submenu ? (
                  <>
                    <span
                      className="menu-link"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <span
                        className={`arrow ${
                          openDropdown === item.name ? "open" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </span>

                    {/* Dropdown */}
                    {openDropdown === item.name && (
                      <ul className="submenu show">
                        {item.submenu.map((sub) => (
                          <li key={sub.path}>
                            <Link to={sub.path}>{sub.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.path}>{item.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* User Info */}
        <div className="menu-user">
          <span className="username">Hi, Admin</span>
          <button className="logout-icon" onClick={handleLogout}>
            <LogOut size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="menu-mobile">
          <ul>
            {menuItems.map((item) =>
              item.submenu ? (
                <li key={item.name}>
                  <div
                    className="submenu-toggle"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <span>{openDropdown === item.name ? "▲" : "▼"}</span>
                  </div>
                  {openDropdown === item.name && (
                    <ul className="submenu-mobile">
                      {item.submenu.map((sub) => (
                        <li key={sub.path}>
                          <Link
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.path}>
                  <Link to={item.path} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              )
            )}
            <li>
              <button className="logout-icon" onClick={handleLogout}>
                <LogOut size={18} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default MenuBar;
