// ---------------------Creating the cookie IN the SERVER---------------------
/* https://www.youtube.com/watch?v=sovAIX4doOE */
const express = require("express"); // npm i express
const app = express();

app.get("/", (req, res) => {
  res.setHeader('set-cookie', ["setFromServer=1;", "jsCantSeeMe=1; httponly"]);

  res.sendFile(`${__dirname}/JS-view.html`);
});

app.listen(8080, () => console.log("listening on port 8080"));
// run server with node server.js
// run client with localhost:8080
