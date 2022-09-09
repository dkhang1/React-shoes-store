import React from "react";
import logo from "../../assets/img/image3.png";
import cart from "../../assets/img/image8.png";
import { NavLink } from "react-router-dom";
import ModelCart from "../product/ModelCart";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
         <NavLink to="/#"> <img src={logo} alt="logo" /></NavLink>
        </div>
        <div className="user-interact">
          <ModelCart />
          <div className="cart">
            <div data-bs-toggle="modal" data-bs-target="#modalId">
              <img src={cart} alt="cart" />
            </div>
            <span>(1)</span>
          </div>
          <div className="user-login">
            <NavLink to="/#">Login</NavLink>
          </div>
          <div className="user-register">
            <NavLink to="/register">Register</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
