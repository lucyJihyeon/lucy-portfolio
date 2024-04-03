import logo from "../../assets/logo/lucy-logo.png";

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "60px", height: "auto", margin: "10px" }}
            />
          </div>
          <div className="col-span-9">{props.children}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
