import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import Container from "../Container";
import logoImg from "../../../assets/Logo-20240916T124732Z-001/Logo/Valuetainment.svg";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".about-dropdown") &&
        !event.target.closest(".business-dropdown")
      ) {
        setIsAboutDropdownOpen(false);
        setIsBusinessDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" w-full text-white bg-[#EA2127] z-10">
      <div className="py-3">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <div className="flex justify-center items-center gap-2">
                <img className=" md:block w-12 text-white" src={logoImg} alt="logo" />
                <p className="text-6xl">VTMERCH</p>
              </div>
            </Link>
            {/* <ul className="lg:flex gap-5 font-   hidden ">
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="text-[#6C60FE] border-b-2 border-[#6C60FE] transform scale-105 transition duration-300"
                  className="hover:text-[#6C60FE] transform  transition duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li
                className="relative about-dropdown"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <div className="flex items-center cursor-pointer">
                  <NavLink
                    to="/about"
                    activeClassName="text-[#6C60FE] border-b-2 border-[#6C60FE] transform scale-105 transition duration-300"
                    className="hover:text-[#6C60FE] transform  transition duration-300 flex items-center"
                  >
                    About Us{" "}
                    <FaChevronDown
                      className={`ml-1 transition-transform duration-300 ${
                        isAboutDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </NavLink>
                </div>
                {isAboutDropdownOpen && (
                  <div
                    className="absolute top-4 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <NavLink
                      to="/about/team"
                      className="block px-4 py-2 hover:text-[#6C60FE] transform  transition duration-300 "
                    >
                      Our Team
                    </NavLink>
                    <NavLink
                      to="/about/history"
                      className="block px-4 py-2 hover:text-[#6C60FE] transform  transition duration-300"
                    >
                      Our History
                    </NavLink>
                  </div>
                )}
              </li>
              <li
                className="relative business-dropdown"
                onMouseEnter={() => setIsBusinessDropdownOpen(true)}
                onMouseLeave={() => setIsBusinessDropdownOpen(false)}
              >
                <div className="flex items-center cursor-pointer">
                  <NavLink
                    to="/business"
                    activeClassName="text-[#6C60FE] border-b-2 border-[#6C60FE] transform scale-105 transition duration-300"
                    className="hover:text-[#6C60FE] transform  transition duration-300 flex items-center"
                  >
                    Business{" "}
                    <FaChevronDown
                      className={`ml-1 transition-transform duration-300 ${
                        isBusinessDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </NavLink>
                </div>
                {isBusinessDropdownOpen && (
                  <div
                    className="absolute top-4 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                    onMouseEnter={() => setIsBusinessDropdownOpen(true)}
                    onMouseLeave={() => setIsBusinessDropdownOpen(false)}
                  >
                    <NavLink
                      to="/business/services"
                      className="block px-4 py-2 hover:text-[#6C60FE] transform  transition duration-300"
                    >
                      Services
                    </NavLink>
                    <NavLink
                      to="/business/partners"
                      className="block px-4 py-2 hover:text-[#6C60FE] transform  transition duration-300"
                    >
                      Partners
                    </NavLink>
                  </div>
                )}
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeClassName="text-[#6C60FE] border-b-2 border-[#6C60FE] transform scale-105 transition duration-300"
                  className="hover:text-[#6C60FE] transform  transition duration-300"
                >
                  Contact
                </NavLink>
              </li>
            </ul> */}
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
