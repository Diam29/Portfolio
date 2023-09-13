import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo6-1.png";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import "./styles.scss";

// const data = [
//   {
//     label: "HOME",
//     to: "/",
//   },
//   {
//     label: "ABOUT ME",
//     to: "/about",
//   },
//   {
//     label: "SKILLS",
//     to: "/skills",
//   },
//   {
//     label: "RESUME",
//     to: "/resume",
//   },
//   {
//     label: "PROYECTS",
//     to: "/proyects",
//   },
//   {
//     label: "CONTACTO",
//     to: "/contacto",
//   }
// ];

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <img src={Logo} alt="Logo" size={50} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>

          <li className="navbar__container__menu__item">
            <Link
              className="navbar__container__menu__item__links"
              to={'/'}
            >
              HOME
            </Link>
          </li>
          <li className="navbar__container__menu__item">
            <Link
              className="navbar__container__menu__item__links"
              to={'/about'}
            >
              ABOUT
            </Link>
          </li>
          <li className="navbar__container__menu__item">
            <Link
              className="navbar__container__menu__item__links"
              to={'/proyects'}
            >
              PROYECTS
            </Link>
          </li>
          <li className="navbar__container__menu__item">
            <Link
              className="navbar__container__menu__item__links"
              to={'/skills'}
            >
              SKILLS
            </Link>
          </li>
          <li className="navbar__container__menu__item">
            <Link
              className="navbar__container__menu__item__links"
              to={'/resume'}
            >
              RESUME
            </Link>
          </li>
          <li className="navbar__container__menu__item">
            <Link
              className="navbar__container__menu__item__links"
              to={'/contact'}
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
