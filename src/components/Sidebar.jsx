import React from "react";
import { FaTimes } from "react-icons/fa";
import "../css/Sidebar.css";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside
      isOpen={isOpen}
      onClick={toggle}
      style={{ right: isOpen ? "0" : "-1000px" }}
    >
      <div className="icon">
        <FaTimes />
      </div>

      <div className="sidebar-menu">
        <a href="#">Pizzas</a>
        <a href="#">Desserts</a>
        <a href="#">Full Menu</a>
      </div>
    </aside>
  );
};

export default Sidebar;
