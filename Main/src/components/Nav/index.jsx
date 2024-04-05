import { NavLink } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { useState } from "react";

function Nav({ currentPage }) {
  const pages = ["projects", "resume", "contact"];
  //setting up the initial showNavbar value to be true
  const [showNavbar, setShowNavbar] = useState(false);

  //function to handle togglenavbar
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="fixed flex justify-end">
      <div className="hamburger">
        {/* hamburger icon */}
        <label className="bar" htmlFor="check">
          <input type="checkbox" id="check" onChange={toggleNavbar} />
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </label>
      </div>
      {/* Normal navbar for larger screens */}
      <ul className={showNavbar ? "block" : ""}>
        {/* first item = About (current page/landing) */}
        <li
          className={`mx-2 ${currentPage === "/" && "navActive"}`}
          key="about"
        >
          <NavLink to="/">About</NavLink>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-2 ${currentPage === `/${Page}` && "navActive"}`}
            key={Page}
          >
            <NavLink to={`/${Page}`}>{capitalizeFirstLetter(Page)}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
