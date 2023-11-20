const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('./sessions');
const user = require('./users');
const chat = require('./chat');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Serve static assets
app.use(express.static("./public"));
app.use(express.json());
// RESTful services
app.get("/api/session", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? session.getSessionUser(sid) : "";
        if (!sid || !user.isValid(username)) {
            res.status(401).json({ error: "auth-missing" });
            return;
        }
        res.json({ username });
    
        
});

app.post("/api/session", (req, res) => {
    const { username } = req.body;
    if (!user.isValid(username)) {
		res.status(400).json({ error: "required-username" });
		return;
	}

	if (username === "dog") {
		res.status(403).json({ error: "auth-insufficient" });
		return;
	}
    const sid = session.addSession(username);
  res.cookie('sid', sid);
  res.json({ username });
});

app.delete("/api/session", (req, res) => {
    const sid = req.cookies.sid;
  const username = sid ? session.getSessionUser(sid) : '';

  if(sid) {
    res.clearCookie('sid');
  }

  if(username) {
    // Delete the session, but not the user data
    session.deleteSession(sid);
  }

  
  res.json({ username });
});

app.get("/api/users", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? session.getSessionUser(sid) : '';
    if(!sid || !user.isValid(username)) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    }
  
    // res.json({ username });
    res.json(user.getUsers());
    console.log(user.getUsers());
  })
app.get("/api/messages", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? session.getSessionUser(sid) : '';
    if(!sid || !user.isValid(username)) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    }
  
    res.json(chat.getMessages())
  })
  
app.post('/api/messages', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? session.getSessionUser(sid) : '';
    if(!sid || !username) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    }
  
    const  message  = req.body.message.trim();

  if(message == '') {
      res.status(400).json({error: 'required-message'});
      return;
  }
  
    chat.addMessage(username, message);
    res.json(chat.getMessages());
  });
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});