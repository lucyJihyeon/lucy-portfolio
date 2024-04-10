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

      {showNavbar && (
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
      )}

      
    </nav>
  );
}

export default Nav;
