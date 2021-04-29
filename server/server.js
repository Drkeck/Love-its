// Required tech.
const express = require('express');
const routes = require('./Routes');
const path = require('path');

// Database setup.
const db //being set up

// server setup.
const PORT = process.env.PORT || 3001;
const app = express();

// for socket.io intigration.
var http = require('http').Server(app);

// extra lines for potential session data and other such nonsense

//apps
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/public")));
// app.use sessions
// app.use Routes

app.listen(PORT, () => console.log("Love-Its Server Ready for the sweet little notes."));