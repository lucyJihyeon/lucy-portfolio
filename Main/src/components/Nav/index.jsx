import { NavLink } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { useState } from "react";
import { motion } from "framer-motion";

function Nav({ currentPage }) {
  const pages = ["skills", "projects", "resume", "contact"];
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // motion variant for transition effect
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <nav className="fixed flex justify-end">
      <div className="hamburger">
        <label className="bar" htmlFor="check">
          <input type="checkbox" id="check" onChange={toggleNavbar} />
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </label>
      </div>
    {/* if showNavbar, render the navbar item with motion effect */}
      {showNavbar ? (
        <motion.ul initial="hidden" animate="visible" variants={variants} className="block">
           <motion.li custom={0} variants={variants} key="about" className={`mx-2 ${currentPage === "/" && "navActive"}`} >
          <NavLink to="/">About</NavLink>
        </motion.li>
          {pages.map((page, i) => (
            <motion.li custom={i + 1} variants={variants} key={page} className={`mx-2 ${currentPage === "/" && "navActive"}`}>
              <NavLink to={`/${page}`}>{capitalizeFirstLetter(page)}</NavLink>
            </motion.li>
          ))}
        </motion.ul>
      ) : 
      // normal navbar for larger screen 
      <ul>
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
      }
      
    </nav>
  );
}

export default Nav;
