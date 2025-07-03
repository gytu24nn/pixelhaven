/* Här är inloggnings formuläret */
import { useState} from "react";


// Import CSS from the Login component
import "../../CSS/LogIn.css"

const LogIn = () => {
const [userNameInput, setUserNameInput] = useState("");
const [passwordInput, setPasswordInput] = useState(""); 
const [errorMessage, setErrorMessage] = useState("");

const handleLogIn = (e: React.FormEvent) => {
    e.preventDefault();

    if(!userNameInput || !passwordInput) {
        setErrorMessage("All fields are required! Try again.");
        return;
    }
}

    return(
        <div className="LogIn-Wrapper">
            <form onSubmit={handleLogIn} className="LogIn-Form-Container">
                <h2>Sign in</h2>

                {errorMessage && <p className="LogIn-Error-Message">{errorMessage}</p>}
                <label htmlFor="Username-Input-LogIn">Username:</label>
                <input 
                    className="Username-Input-LogIn"
                    type="text"
                    placeholder="Enter your username..."
                    value={userNameInput}
                    onChange={(e) => setUserNameInput(e.target.value)}
                />

                <label htmlFor="Password-Input-LogIn">Password:</label>
                <input
                    className="Password-Input-LogIn"
                    type="password"
                    placeholder="Enter your password..."
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                />

                <button type="submit">Sign in</button>

                <hr className="Login-Line " />

                <div className="alt.LogIn-Options">
                    <button type="button" onClick={() => alert("Goolge sign in not implemented yet!")}>
                        <i className="fa-brands fa-google"></i> Sign in with Google
                    </button>
                    <button type="button" onClick={() => alert("Steam sign in not implemented yet!")}>
                        <i className="fa-brands fa-steam"></i> Sign in with Steam
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LogIn;
