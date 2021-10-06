const open = require("open");
const fs = require("fs");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(express.static("static"));
app.listen(80, () => {
  console.log("WORKS");
});

require("dotenv").config();
let port = 443;

let cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
    httpsOptions: {
      key: fs.readFileSync(
        "/etc/letsencrypt/live/beeserver.ru/privkey.pem",
        "utf8",
      ),
      cert: fs.readFileSync(
        "/etc/letsencrypt/live/beeserver.ru/fullchain.pem",
        "utf8",
      ),
    },
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, function (a, b) {
    console.log(`
    Все работает.
  `);
  });
