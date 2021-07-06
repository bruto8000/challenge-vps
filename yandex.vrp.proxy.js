const open = require("open");
const fs = require("fs");
const bodyParser = require("body-parser");
const express = require("express");

// const app = express();
// app.get(
//   "/.well-known/acme-challenge/GFXD8P2_YbrfZP0r3GrL9ma8036WHAdSQY_f41e0qGc",
//   (req, res) => {
//     res.end(
//       "GFXD8P2_YbrfZP0r3GrL9ma8036WHAdSQY_f41e0qGc.ima0xUnIkqcIsny9uiHKW1jvL3thEZXTyIvO5CeeJiE"
//     );
//   }
// );
// app.listen(80, () => {
//   console.log("WORKS");
// });

require("dotenv").config();
let port = 443;

let cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
    httpsOptions: {
      key: fs.readFileSync(
        "/etc/letsencrypt/live/beeserver.ru/privkey.pem",
        "utf8"
      ),
      cert: fs.readFileSync(
        "/etc/letsencrypt/live/beeserver.ru/cert.pem",
        "utf8"
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
