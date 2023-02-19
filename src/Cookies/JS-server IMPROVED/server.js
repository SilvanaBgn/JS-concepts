// ---------------------Creating the cookie IN the SERVER---------------------
/* https://www.youtube.com/watch?v=sovAIX4doOE */
const express = require("express"); // npm i express
const app = express();
app.use("/static", express.static(`${__dirname}/static`)); // to upload other additional files, cause I don't run nginx


app.get("/set", (req, res) => {
  // We just set the cookie when we open the page!
  res.setHeader('set-cookie', ["setFromServer=1;"]);
  res.sendFile(`${__dirname}/JS-view.html`);
});
app.get("/del", (req, res) => {
  // We expire the cookie
  res.setHeader('set-cookie', ["setFromServer=1; max-age=-1;"]);
  res.sendFile(`${__dirname}/JS-view.html`);
});

app.listen(8080, () => console.log("listening on port 8080"));
// run server with node server.js
// run client with localhost:8080



/*
app.get("/set/:meuNome&:maxAge&:path", (req, res, next) => {
  // We just set the cookie when we open the page!
  // res.setHeader('set-cookie', ["setFromServer=1"]);
  console.log('req.params.meuNome, req.params.meuNome')
  const cookie = `meuNome=${req.params.meuNome}; max-age=${req.params.maxAge}; path=${req.params.path};`;
  console.log('cookie', cookie);
  res.setHeader('set-cookie', [cookie]);
  res.sendFile(`${__dirname}/JS-view.html`);
  // next();
});
app.get("/delete", (req, res, next) => {
  // We expire the cookie
  res.setHeader('set-cookie', ["setFromServer=1; maxAge=-1"]);
  res.sendFile(`${__dirname}/JS-view.html`);
  // next();
});


app.listen(8080, () => console.log("listening on port 8080"));

*/