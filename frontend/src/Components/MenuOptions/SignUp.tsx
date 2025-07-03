/* Här är registrera sig formuläret */
import { useState, useEffect, use } from "react";
import { useNavigate } from "react-router-dom";

// Import CSS from the SignUp component
import "../../CSS/SignUp.css"

const SignUp = () => {
    const [signUpUserNameInput, setSignUpUserNameInput] = useState("");
    const [signUpEmailInput, setSignUpEmailInput] = useState("");
    const [signUpPasswordInput, setSignUpPasswordInput] = useState("");
    const [signUpConfirmPasswordInput, setSignUpConfirmPasswordInput] = useState("");
    const [signUperrorMessage, setSignUpErrorMessage] = useState("");
    const [accountCreated, setAccountCreated] = useState(false);

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();

        if(!signUpUserNameInput || !signUpEmailInput || !signUpPasswordInput || !signUpConfirmPasswordInput) {
            setSignUpErrorMessage("All fields are required! Try again.");
            return;
        }

        if(signUpPasswordInput !== signUpConfirmPasswordInput) {
            setSignUpErrorMessage("Password does not match! Try again.");
            return;
        }

        if(signUpPasswordInput.length < 6) {
            setSignUpErrorMessage("Password must be at least 6 characters long! Try again.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(signUpEmailInput)) {
            setSignUpErrorMessage("Invalid email! Try again.");
            return;
        }


    }

    return(
        <div className="SignUp-Wrapper">
            <form onSubmit={handleSignUp} className="SignUp-Form-Container">
                <h2>Sign up</h2>

                {signUperrorMessage && <p className="SignUp-Error-Message">{signUperrorMessage}</p>}

                <label htmlFor="SignUp-Email-Input">Email:</label>
                <input
                    className="SignUp-Email-Input"
                    type="text"
                    placeholder="Enter your email..."
                    value={signUpEmailInput}
                    onChange={(e) => setSignUpEmailInput(e.target.value)}
                />

                <label htmlFor="SignUp-UserName-Input">Username:</label>
                <input
                    className="SignUp-UserName-Input"
                    type="text"
                    placeholder="Enter your username..."
                    value={signUpUserNameInput}
                    onChange={(e) => setSignUpUserNameInput(e.target.value)}
                />

                <label htmlFor="SignUp-Password-Input">Password:</label>
                <input
                    className="SignUp-Password-Input" 
                    type="text" 
                    placeholder="Enter your password..."
                    value={signUpPasswordInput}
                    onChange={(e) => setSignUpPasswordInput(e.target.value)}
                />

                <label htmlFor="SignUp-ConfirmPassword-Input">Confirm password:</label>
                <input
                    className="SignUp-ConfirmPassword-Input" 
                    type="text"
                    placeholder="Confirm your password..."
                    value={signUpConfirmPasswordInput}
                    onChange={(e) => setSignUpConfirmPasswordInput(e.target.value)}
                />

                <button type="submit">Sign up</button>

                <hr className="SignUp-Line" />

                <div className="alt-SignUp-Options">
                    <button type="button" onClick={() => alert("Google sign up not implemented yet!")}>
                        <i className="fa-brands fa-google"></i> Sign in with Google
                    </button>
                    <button type="button" onClick={() => alert("Steam sign up not implemented yet!")}>
                        <i className="fa-brands fa-steam"></i> Sign in with Steam
                    </button>
                </div>



            </form>
        </div>
    )
}

export default SignUp; 