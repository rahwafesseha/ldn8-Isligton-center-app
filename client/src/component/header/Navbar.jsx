import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Link className="link" to="/">
            <h2 className="title">Islington Centre Learning Portal</h2>
          </Link>
        </div>

        <ul className="nav-menu">
          <Link className="link" to="/Profile">
            {isAuthenticated ? <li>Welcome {user.name}</li> : null}
          </Link>
          <Link className="link" to="/lessons">
            <li className="lesson-link">Lessons</li>
          </Link>
          <Link className="link" to="/teacher">
            <li className="teacher-link">Teacher</li>
          </Link>
          {!isAuthenticated ? (
            <button onClick={() => loginWithRedirect()}>Login</button>
          ) : (
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          )}
        </ul>

        {/* <div className="nav-icon">
          {isAuthenticated ? (
            <button className="log-btn" onClick={() => logout()}>
              Log Out
            </button>
          ) : (
            <button className="log-btn" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          )}
        </div> */}
        <span>
          <div className="hamburger" onClick={handleNav}>
            {!nav ? (
              <HiOutlineMenuAlt4 style={{ color: "#000" }} className="icon" />
            ) : (
              <AiOutlineClose style={{ color: "#000" }} className="icon" />
            )}
          </div>

          <div className={nav ? "mobile-menu active" : "mobile-menu"}>
            <ul className="mobile-nav">
              <Link
                to="/lessons"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li>Lessons</li>
              </Link>
              <Link
                to="/teacher"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li>Teacher</li>
                <li>try</li>
              </Link>
            </ul>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
