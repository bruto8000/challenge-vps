const open = require("open");
const fs = require("fs");
const bodyParser = require("body-parser");
require("dotenv").config();
let port = 8888;
let cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
    handleInitialRequest: (req, res, url) => {
      fs.appendFile(
        "./logs.txt",
        `\n\n\n\n\n${new Date()}
        \n\n
        ${JSON.stringify(
          {
            href: url && url.href,
            headers: req.headers,
          },
          null,
          2
        )}
        `,
        (err) => err
      );

      return false;
    },
  })
  .listen(port, host, function (a, b) {
    console.log(`
    Все работает. 
  `);
  });
