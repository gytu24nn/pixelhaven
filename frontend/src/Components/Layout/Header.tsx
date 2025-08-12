import { useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/Layout.css";

const Header = () => {
    // State to manage the menu open/close state
  const [menuOpen, setMenuOpen] = useState(false);
  const [discoveryOpen, setDiscoveryOpen] = useState(false);

  //function to toggle the menu open/close state (funktion för att växla meny öppen/stängd meny)
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDiscovery = () => setDiscoveryOpen(!discoveryOpen);

    return (
        <>
            {/*Här börjar header och i denna finns loga, sign up, log in and menu icon*/}
      <header>
        <div className="header-container">
          {/*Sidans logotyp*/}
          <h1 className="Logo-text">
            <Link to="/" onClick={() => setMenuOpen(false)}>Pixelhaven</Link>
          </h1>

          {/*Sektion till höger i header med inloggningslänkar och menyikon */}
          <div className={`right-section ${menuOpen ? "menu-open" : ""}`}>
            {/* Länkar för att registrera sig och logga in */}
            <div className="LogIn-signUp-Links">
              <Link to={"/Signup"}>SIGN UP</Link>
              <Link to={"/Login"}>SIGN IN</Link>
            </div>

            {/* 
              Menyikon (hamburgermeny) som öppnar sidomenyn när man klickat på den.
              Här anropas även funktionen toggleMenu för att växla menystatus om den är öppen eller stängd.
             */}
            <div className="menu-icon">
              <i
                className="fa-solid fa-bars menu-icon"
                onClick={toggleMenu}
              ></i>
              {/*
                Detta är den sidomeny som visas när menyn är öppen. 
              */}
              {menuOpen && (
                <div className="side-menu open">
                  <div className="menu-item" onClick={toggleDiscovery}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                    DISCOVERY
                  </Link>
                  <i className={`fa-solid fa-chevron-${discoveryOpen ? "up" : "down"}`}></i>
                  </div>
                  {discoveryOpen && (
                    <div className="submenu">
                      <Link to="/Genres" onClick={() => setMenuOpen(false)}>GENRES</Link>
                    </div>
                  )}
                  
                  <Link to="/Gametracker" onClick={() => setMenuOpen(false)}>
                    GAMETRACKER
                  </Link>
                  <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>
                    ABOUT US
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
        </>
    )
}

export default Header;