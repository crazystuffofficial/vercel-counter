var fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(
  cors({
    origin: false, // Disables CORS
  }),
);

app.get("/", (req, res) => {
  var data = fs.readFileSync("./visits.txt", "utf-8");
  var visits = Number(data);
  visits++;
  fs.writeFileSync("./visits.txt", visits.toString(), "utf-8");
  res.send(visits.toString());
});

app.listen(8080, () => {
  console.log("Counter listening on port 8080");
});
