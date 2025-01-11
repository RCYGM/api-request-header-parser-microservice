const express = require("express");
const app = express();
const cors = require("cors");

// so that your API is remotely testable by FCC
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.get("/api/hello", (req, res) => {
  res.json({ greeting: "hello Jürgen" });
});

app.get("/api/whoami", (req, res) => {
  const language = req.get("Accept-Language");
  const software = req.get("User-Agent");
  res.json({
    ipaddress: req.ip,
    language,
    software,
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
