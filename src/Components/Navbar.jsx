import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const navList = [
    {
      name: "Home",
      path: "",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const icons = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Ashik73736",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mohammed-ashik-582457207/",
    },
  ];
  return (
    <div className="nav flex h-16 items-center">
      <div className="logo bg-red-600 w-[10%] h-5 grow-0"></div>
      <div className="link-list flex justify-center grow ">
        <ul className="flex w-[20%] justify-between ">
          {navList.map((item) => {
            return (
              <li className="text-[20px]">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? `border-b-2 border-black ease-in-out transition-all`
                      : `hover:border-b-2 border-black ease-in-out transition-all`
                  }
                  
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="logos  w-[10%] grow-0">
        <div className="flex justify-between w-[50%] text-[25px]">
          {icons.map((item) => {
            return (
              <div>
                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
