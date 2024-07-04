import Surfer from "../Surfer/Surfer";
import "./Header.css";

import catImage from '../../assets/catImage.jpeg'

function Header() {
  return (
    <div className="header-design">
      <img src={catImage}/>
      <Surfer path={"/"} destiny={"Home"} />
      <Surfer path={"/login"} destiny={"Login"} />
      <Surfer path={"/profile"} destiny={"Profile"} />
      <Surfer path={"/register"} destiny={"Register"} />
      <Surfer path={"/admin"} destiny={"Admin"} />
    </div>
  );
}

export default Header;
