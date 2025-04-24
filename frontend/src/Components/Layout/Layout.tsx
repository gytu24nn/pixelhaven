import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <header>
                <h1>Pixelhaven</h1>
                
                {/*Links for create account and log in.*/}
                <div className="LogIn-signUp-Links">
                   <Link to={'/Signup'}>
                    SIGN UP
                    </Link>
                    <Link to={'/Login'}>
                        LOG IN
                    </Link> 
                </div>

                {/*Menu icon*/}
                <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
                
                {menuOpen && (
                    <nav className="menu">
                        <Link to="/">
                            DISCOVERY
                        </Link>
                        <Link to="/Gametracker">
                            GAMETRACKER
                        </Link>
                    </nav>
                )}

            </header>

            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </>
    );
};

export default Layout;