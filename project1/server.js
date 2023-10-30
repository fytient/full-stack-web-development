const express = require('express');
const cookieParser = require('cookie-parser');
const uuid = require('uuid').v4;
const words = require('./words');
const home = require('./home');
const app = express();
const port = 3000;
app.use(cookieParser());
app.use(express.static('public'));
// app.use('/css', express.static('css'));
app.use(express.urlencoded({ extended: false }));

const sessions = {};
const users = {};

app.get('/', (req, res) => {
    const sid = req.cookies.sid;
    const user = sessions[sid];
    if (!user) {
        res.send(home.login());8
        return;
    }

    const { guesses, validGuesses, secretWord } = users[user];
    const guessedWords = Object.keys(guesses);
    const lastGuess = guessedWords[guessedWords.length - 1];
    // const lastGuessMatches = guesses[lastGuess];
    const lastGuessMatches = guesses;


    res.send(home.guess(user, words, guessedWords, lastGuess, lastGuessMatches, secretWord));
});

app.post('/login', (req, res) => {
    const { username } = req.body;
    const validChars = /^[a-zA-Z0-9]+$/;
    if (!validChars.test(username) || username === 'dog') {
        res.send(`
            <form method="POST" action="/login">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username">
                <p>Invalid username. Please try again.</p>
                <button type="submit">Login</button>
            </form>
        `);
        return;
    }
    const sid = uuid();
    sessions[sid] = username;
    if (!users[username]) {
        users[username] = {
            guesses: {},
            validGuesses: 0,
            secretWord: words[Math.floor(Math.random() * words.length)],
        };
        console.log(`New game for ${username}: ${users[username].secretWord}`);
        // res.send(home.guess());
    }
    res.cookie('sid', sid);
    res.redirect('/');
});

app.post('/logout', (req, res) => {
    const sid = req.cookies.sid;
    delete sessions[sid];
    res.clearCookie('sid');
    res.redirect('/');
});

app.post('/new-game', (req, res) => {
    const sid = req.cookies.sid;
    const user = sessions[sid];
    if (!user) {
        res.send(home.newGame());
        return;
    }
    users[user].guesses = {};
    users[user].validGuesses = 0;
    users[user].secretWord = words[Math.floor(Math.random() * words.length)];
    console.log(`New game for ${user}: ${users[user].secretWord}`);
    // res.redirect('/');
    res.send(home.newGame());
});

app.post('/guess', (req, res) => {
    const sid = req.cookies.sid;
    const user = sessions[sid];
    if (!user) {
        res.send(home.loginFail);
        return;
    }
    const { guess } = req.body;
    const { secretWord, guesses, validGuesses } = users[user];
    if (guesses[guess] !== undefined) {
        res.redirect('/');
        return;
    }
    let matches = 0;
    for (const letter of guess) {
        if (secretWord.includes(letter)) {
            matches++;
        }
    }
    guesses[guess] = matches;
    users[user].validGuesses = validGuesses + 1;
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
