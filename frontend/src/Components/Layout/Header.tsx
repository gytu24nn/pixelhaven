import { useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/Layout.css";

const Header = () => {
    // State to manage the menu open/close state
  const [menuOpen, setMenuOpen] = useState(false);

  //function to toggle the menu open/close state (funktion för att växla meny öppen/stängd)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    return (
        <>
            {/*Här börjar header och i denna finns loga, sign up, log in and menu icon*/}
      <header>
        <div className="header-container">
          {/*Sidans logotyp*/}
          <h1 className="Logo-text">Pixelhaven</h1>

          {/*Sektion till höger i header med inloggningslänkar och menyikon */}
          <div className={`right-section ${menuOpen ? "menu-open" : ""}`}>
            {/* Länkar för att registrera sig och logga in */}
            <div className="LogIn-signUp-Links">
              <Link to={"/Signup"}>SIGN UP</Link>
              <Link to={"/Login"}>LOG IN</Link>
              <Link to={"/"}>DISCOVERY</Link>
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
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    DISCOVERY
                  </Link>
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