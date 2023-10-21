const express = require('express');
const cookieParser = require('cookie-parser');
const uuid = require('uuid').v4;
const app = express();
const port = 3000;


// Object to store session information
const sessions = {};

// Object to store user information
const users = {};
app.use('/css', express.static('css'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
    const sid = req.cookies.sid;
    if (!sid || !sessions[sid] || !users[sessions[sid].username]) {
        res.redirect('/');
    } else {
        next();
    }
};

// Home page
app.get('/', (req, res) => {
    const sid = req.cookies.sid;
    if (!sid || !sessions[sid] || !users[sessions[sid].username]) {
        // User is not logged in
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <h1>Login</h1>
            <link rel="stylesheet" href="/css/styles.css">
        </head>
        <body>
            <form method="POST" action="/login">
                <label>
                    Username:
                    <input type="text" name="username">
                </label>
                <button type="submit">Login</button>
            </form>
            </body>
        `);
    } else {
        // User is logged in
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <h1>Data Page</h1>
                <link rel="stylesheet" href="/css/styles.css">
            </head>
            <body>
            <p>You are logged in as ${sessions[sid].username}</p>
            <p>Stored word: ${users[sessions[sid].username].storedWord}</p>
            <form method="POST" action="/change-word">
                <label>
                    New stored word:
                    <input type="text" name="storedWord">
                </label>
                <button type="submit">Change stored word</button>
            </form>
            <form method="POST" action="/logout">
                <button type="submit">Logout</button>
            </form>
            </body>
        `);
    }
});

// Login route
app.post('/login', (req, res) => {
    const { username } = req.body;
    if (!username || username === 'dog' || !/^[a-zA-Z0-9]+$/.test(username)) {
        res.status(401).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <h1>Login failed</h1>
            <link rel="stylesheet" href="/css/styles.css">
        </head>
        <body>
            
            <p>Please enter a valid username</p>
            <a href="/">Back to login</a>
            </body>
        `);
    } else {
        const sid = uuid();
        sessions[sid] = { username };
        res.cookie('sid', sid);
        if (!users[username]) {
            users[username] = { storedWord: '' };
        }
        res.redirect('/');
    }
});

// Change stored word route
app.post('/change-word', isLoggedIn, (req, res) => {
    const sid = req.cookies.sid;
    const { storedWord } = req.body;
    if (storedWord) {
        users[sessions[sid].username].storedWord = storedWord;
    }
    res.redirect('/');
});

// Logout route
app.post('/logout', isLoggedIn, (req, res) => {
    const sid = req.cookies.sid;
    delete sessions[sid];
    res.clearCookie('sid');
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
