
const home = {
  login: function () {
    return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <link rel="stylesheet" href="styles.css">
          </head>
          <body>
            <div class="container">
              <h1 class="title">Word Guessing Game</h1>
              <div class="login-form">
              <form method="POST" action="/login">
                       <label for="username">Username:</label>
                       <input type="text" id="username" name="username">
                       <button type="submit">Login</button>
                   </form>
              </div>
            </div>
          </body>
        </html>
      `;
  },
  newGame: function () {
    return `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">

              <link rel="stylesheet" href="styles.css">
            </head>
            <body>
              <div class="container">
                <h1 class="title">Word Guessing Game</h1>
                <div class="login-form">
                <form method="POST" action="/login">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" >
                <p>Please login to start a new game.</p>
                <button type="submit">Login</button>
            </form>
                </div>
              </div>
            </body>
          </html>
        `;
  },
  loginFail: function () {
    return `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">

              <link rel="stylesheet" href="styles.css">
            </head>
            <body>
              <div class="container">
                <h1 class="title">Word Guessing Game</h1>
                <div class="login-form">
                <form method="POST" action="/login">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username">
                <p>Invalid username. Please try again.</p>
                <button type="submit">Login</button>
            </form>
                </div>
              </div>
            </body>
          </html>
        `;
  },
  guess: function (
    user,
    words,
    guessedWords,
    lastGuess,
    lastGuessMatches,
    secretWord
  ) {
    let validGuesses = guessedWords.filter((word) =>
      words.includes(word.toLowerCase())
    );
    let invalidGuesses = guessedWords.filter(
      (word) => !words.includes(word.toLowerCase())
    );

    let incorrectGuesses = validGuesses.filter(
      (word) =>
        word.toLowerCase() !== secretWord.toLowerCase() &&
        word.toLowerCase().split("").sort().join("") !==
          secretWord.toLowerCase().split("").sort().join("")
    );

    let correctGuesses = validGuesses.filter(
      (word) => word.toLowerCase() === secretWord.toLowerCase()
    );

    let content = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">

              <link rel="stylesheet" href="styles.css">
            </head>
            <body>
              <div class="container">
                <h1 class="title">Word Guessing Game</h1>
                <h2>Welcome, ${user}!</h2>
                <p>Secret word possibilities:</p>
                <ul>
                  ${words.map((word) => `<li>${word}</li>`).join("")}
                </ul>
                <p>Previously guessed words:</p>
                <ul>
                  ${guessedWords
                    .map(
                      (word) =>
                        `<li>${word} (${lastGuessMatches[word]} matches)</li>`
                    )
                    .join("")}
                </ul>
        
                <p>Valid guesses: ${validGuesses.length}</p>
                <p>Invalid guesses: ${invalidGuesses.length}</p>
                
                
        `;
    if (lastGuess) {
      if (!validGuesses.includes(lastGuess.toLowerCase())) {
        content +=
          "<p>Your last guess was invalid because it is not a valid word.</p>";
      } else if (guessedWords.slice(0, -1).includes(lastGuess.toLowerCase())) {
        content +=
          "<p>Your last guess was invalid because it has already been guessed this game.</p>";
      } else {
        if (correctGuesses.length > 0) {
          content += "<p>Congrats! Your last guess was correct!</p>";
        } else if (
          lastGuess.toLowerCase().split("").sort().join("") ===
          secretWord.toLowerCase().split("").sort().join("")
        ) {
          content +=
            "<p>Your last guess shares all the letters of the secret word, but is not the secret word.</p>";
        } else {
          content += "<p>Your last guess was incorrect.</p>";
        }
      }
      
    }

    // Check if the game is won
    if (correctGuesses.length > 0) {
      content += "<p>You won!</p>";
    } else {
      // Display the form to make another guess
      content += `
                <form method="POST" action="/guess">
                  <label for="guess">Make another guess:</label>
                  <input type="text" id="guess" name="guess">
                  <button type="submit">Guess</button>
                </form>
            `;
    }
    
    content += `
          <form method="POST" action="/logout">
            <button type="submit">Logout</button>
          </form>
          <form method="POST" action="/new-game">
            <button type="submit">Start a new game</button>
          </form>
        </div>
      </body>
    </html>
    `;
    return content;
  },
};

module.exports = home;
