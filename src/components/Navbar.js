import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Patient Registration", path: "/patient-registration" },
    { name: "OPD Billing", path: "/billing" },
    { name: "Investigation Billing", path: "/investigation-billing" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & App Name */}
        <div className="flex items-center space-x-3">
          <img src="/logo192.png" alt="Logo" className="h-8 w-8" />
          <span className="text-lg font-semibold">CareConnect HMIS</span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {isOpen && (
        <ul className="md:hidden bg-blue-600 px-4 pb-3 space-y-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="block py-2 hover:text-yellow-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
