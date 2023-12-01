import { useState } from "react";
import Compare from "./compare";

function Game({ setIsLoggedIn, username, setUsername }) {
    const [userGuess, setUserGuess] = useState("");
    const [info, setInfo] = useState("");

    const secret = "RECAT";

    const submitHandler = (e) => {
        e.preventDefault();
        setUserGuess('');
        const result = Compare(userGuess, secret);
        if (typeof result === 'string') {
            setInfo(result);
        } else if (typeof result === 'number') {
            setInfo(`${userGuess} had ${result} letters in common`);
        } else if (result === true) {
            setInfo(`${userGuess} is the secret word!`);
        }
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
    };


    let hasError = false;
    if (info !== "") {
        hasError = true;
    }

    return (
        <div className="game">
            <h2>Make a Guess</h2>
            <div className="logout">
                <h3>Welcome {username}</h3>
					
				</div>
            
            <form className="guess-form" onSubmit={submitHandler}>
                {hasError && <p className="alert">{info}</p>}
                <label className="form-label">
                    <h3>Please input a 5 letter word: </h3>
                    <input
                        className="form-input"
                        value={userGuess}
                        onInput={(e) => {
                            setUserGuess(e.target.value);
                        }}
                    />
                </label>
                <button type="submit" className="form-button">
                    Submit
                </button>
                <button className="logout-button"onClick={handleLogout}>Logout</button>
            </form>
        </div>
    );
}

export default Game;
