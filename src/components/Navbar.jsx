import { FaPizzaSlice } from "react-icons/fa";
import "../css/Navbar.css";

const Navbar = ({ toggle }) => {
  return (
    <nav>
      <a href="#">Pizza</a>
      <div className="NavIcons" onClick={toggle}>
        <p>Menu</p>
        <FaPizzaSlice />
      </div>
    </nav>
  );
};

export default Navbar;
