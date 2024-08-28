import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Tour and Travel</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link to={item.url} className={item.cName}>
                <i className={item.icon}></i>
                <span className="nav-text">{item.title}</span>
              </Link>
            </li>
          ))}
          <li className="nav-button">
            <button>Sign Up</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
