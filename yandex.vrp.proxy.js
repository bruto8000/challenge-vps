const open = require("open");
const fs = require("fs");
const bodyParser = require("body-parser");
const express = require("express");

<<<<<<< HEAD
const app = express();
app.get(
  "/.well-known/acme-challenge/180W3EfHIaPF1NH4cb4WmqE2uNUGJzSK3N5BFgXABAs",
  (req, res) => {
    res.end(
      "180W3EfHIaPF1NH4cb4WmqE2uNUGJzSK3N5BFgXABAs.ima0xUnIkqcIsny9uiHKW1jvL3thEZXTyIvO5CeeJiE",
    );
  },
);
app.listen(80, () => {
  console.log("WORKS");
});
=======
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
>>>>>>> e9c69a8e8deb4863443a4bc22c7613a143220a85

require("dotenv").config();
let port = 443;

let cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
    httpsOptions: {
      key: fs.readFileSync(
<<<<<<< HEAD
        "/etc/letsencrypt/live/kupitbitovku.ru/privkey.pem",
        "utf8",
      ),
      cert: fs.readFileSync(
        "/etc/letsencrypt/live/kupitbitovku.ru/cert.pem",
        "utf8",
=======
        "/etc/letsencrypt/live/beeserver.ru/privkey.pem",
        "utf8"
      ),
      cert: fs.readFileSync(
        "/etc/letsencrypt/live/beeserver.ru/cert.pem",
        "utf8"
>>>>>>> e9c69a8e8deb4863443a4bc22c7613a143220a85
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
