const express = require("express");
const next = require("next");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  server.get("/", (req, res) => app.render(req, res, "/"));

  server.all("*", (req, res) => handle(req, res));

  function callListen(err) {
    if (err) throw err;

    // tslint:disable-next-line:no-console
    console.log(`Listening at:${port}`);
  }

  server.listen(port, callListen);
});
