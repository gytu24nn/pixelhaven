import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";

//Importing CSS specific to this component
import '../../CSS/Layout.css';

const Layout = () => {
  // State to manage the menu open/close state
  const [menuOpen, setMenuOpen] = useState(false);

  //function to toggle the menu open/close state (funktion för att växla meny öppen/stängd)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    //detta är huvudkomponenten som innehåller header, main och footer
    <div className={`Wrapper ${menuOpen ? 'menu-open' : ''}`}>
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
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      {/* Detta är main sektionen där huvudinnehållet visas. */}
      <main>
        <Outlet />
      </main>
      
      {/* Footer längst ner på sidan. */}
      <footer></footer>
    </div>
  );
};

export default Layout;
