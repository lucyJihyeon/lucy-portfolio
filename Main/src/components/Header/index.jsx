// importing useEffect and useState
import { useEffect, useState } from "react";
import logo from "../../assets/logo/lucy-logo.png";

function Header(props) {
  // setup the initial scrolled value to 'false'
  const [scrolled, setScrolled] = useState(false);

  const refresh = () => {
    window.location.reload();
  }

  //updating the scrolled value based on the ertical scroll position of the window.
  useEffect(() => {
    const handleScroll = () => {
      //window.pageTOffset returns the number of pixels that the document has been scrolled vertically from the top
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full flex fixed top-0 ${
        scrolled ? "navbar-bg" : ""
      }`}
    >
      {/* container class for responsive  */}
      <div className="container flex justify-between cursor-pointer" onClick={refresh}>
        <img src={logo} alt="Logo" className="top-7 w-20"/>
        {props.children}
      </div>
    </header>
  );
}

export default Header;
