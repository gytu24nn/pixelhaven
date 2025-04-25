import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import '../../CSS/Layout.css';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`Wrapper ${menuOpen ? 'menu-open' : ''}`}>
      <header>
        <div className="header-container">
          <h1 className="Logo-text">Pixelhaven</h1>

          <div className={`right-section ${menuOpen ? "menu-open" : ""}`}>
            <div className="LogIn-signUp-Links">
              <Link to={"/Signup"}>SIGN UP</Link>
              <Link to={"/Login"}>LOG IN</Link>
            </div>

            <div className="menu-icon">
              <i
                className="fa-solid fa-bars menu-icon"
                onClick={toggleMenu}
              ></i>
              {menuOpen && (
                <div className="side-menu open">
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    DISCOVERY
                  </Link>
                  <Link to="/Gametracker" onClick={() => setMenuOpen(false)}>
                    GAMETRACKER
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default Layout;
