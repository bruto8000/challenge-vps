const open = require("open");
const fs = require("fs");
const bodyParser = require("body-parser");
// const express = require("express");

// const app = express();
// app.get(
//   "/.well-known/acme-challenge/180W3EfHIaPF1NH4cb4WmqE2uNUGJzSK3N5BFgXABAs",
//   (req, res) => {
//     res.end(
//       "180W3EfHIaPF1NH4cb4WmqE2uNUGJzSK3N5BFgXABAs.ima0xUnIkqcIsny9uiHKW1jvL3thEZXTyIvO5CeeJiE"
//     );
//   }
// );
// app.listen(80, () => {
//   console.log("WORKS");
// });

require("dotenv").config();
let port = 8080;

let cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
    httpsOptions: {
      key: fs.readFileSync(
        "/etc/letsencrypt/live/kupitbitovku.ru/privkey.pem",
        "utf8"
      ),
      cert: fs.readFileSync(
        "/etc/letsencrypt/live/kupitbitovku.ru/cert.pem",
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
