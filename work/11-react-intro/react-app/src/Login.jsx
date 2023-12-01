import { useState } from 'react';


function Login({ setIsLoggedIn, setUsername }) {
    const [error, setError] = useState('');
    const [usernameInput, setUsernameInput] = useState('');

    function isValidUsername(username) {
        if (username === 'dog') {
            return false;
        }

        let isValid = true;
        isValid = isValid && username.trim();
        isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
        return isValid;
    }

    function handleLogin() {
        if (isValidUsername(usernameInput)) {
            setIsLoggedIn(true);
            setUsername(usernameInput);
            setError('');
        } else {
            setIsLoggedIn(false)
            if (usernameInput === 'dog') {
                setError('Error: Dog is not a valid user');
            } else {
                setError('Error: The username contains invalid characters');
            }
        }
    }

    return (
        <div className="login-page">
            <h2>Please Login</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
                setUsernameInput('');
            }}>
                <input
                    value={usernameInput}
                    onInput={(e) => setUsernameInput(e.target.value)}
                    placeholder="Enter your username"
                />
                <button className="login-button">Login</button>
            </form>
            <div className="error">{error}</div>
        </div>
    );
}

export default Login;
