import React from "react";
import { Link } from "react-router-dom";
import config from "./../../config.json";

const menus = ["home", "articles", "projects"];

const Nav = () => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">{config.title}</Link>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {menus.map((m) => (
              <li key={m}>
                <Link to={`/${m}`}>{m}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
