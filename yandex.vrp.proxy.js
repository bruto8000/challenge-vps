const open = require("open");
const fs = require("fs");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.get(
  "/.well-known/acme-challenge/180W3EfHIaPF1NH4cb4WmqE2uNUGJzSK3N5BFgXABAs",
  (req, res) => {
    res.end(
      "180W3EfHIaPF1NH4cb4WmqE2uNUGJzSK3N5BFgXABAs.ima0xUnIkqcIsny9uiHKW1jvL3thEZXTyIvO5CeeJiE"
    );
  }
);
app.listen(80, () => {
  console.log("WORKS");
});

// require("dotenv").config();
// let port = 80;
// let cors_proxy = require("cors-anywhere");
// cors_proxy
//   .createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ["origin", "x-requested-with"],
//     removeHeaders: ["cookie", "cookie2"],
//     handleInitialRequest: (req, res, url) => {
//       fs.appendFile(
//         "./logs.txt",
//         `\n\n\n\n\n${new Date()}
//         \n\n
//         ${JSON.stringify(
//           {
//             href: url && url.href,
//             headers: req.headers,
//           },
//           null,
//           2
//         )}
//         `,
//         (err) => err
//       );

//       return false;
//     },
//   })
//   .listen(port, host, function (a, b) {
//     console.log(`
//     Все работает.
//   `);
//   });
