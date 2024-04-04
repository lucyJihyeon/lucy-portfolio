import logo from "../../assets/logo/lucy-logo.png";

function Header(props) {
  return (
    <header className="flex-row justify-between grid grid-cols-12">
      {/* container class for responsive  */}
      <div className="container mx-auto">
        <div className="col-span-12 flex items-center">
          
          <div className="col-span-9">
            <img src={logo} alt="Logo" style={{ width:"70px"}}/>
              {props.children}
          </div> 
        </div>
      </div>
      
    </header>
  );
}

export default Header;