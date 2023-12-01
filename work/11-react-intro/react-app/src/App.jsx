import { useState } from 'react'
import './App.css'
import Login from './Login';
import Game from './Game';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('')

  return (
    <div className="App">
      <h2>Welcome to the Guess Game</h2>
      {isLoggedIn ? (
        <Game
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          username={username}
        />
      ) : (
        <Login
          setIsLoggedIn={setIsLoggedIn}
          setUsername={setUsername}
        />
      )}
    </div>
  );
}


export default App
