import {React} from "react";
import "./Navbar.css";
import {Button} from "../Button/Button";
// import Button from "../Button/Button.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link>
            <Button text="Home" />
          </Link>
        </li>

        <li>
          <Link>
            <Button text="About" />
          </Link>
        </li>

        <li>
          <Link>
            <Button text="Contact" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
