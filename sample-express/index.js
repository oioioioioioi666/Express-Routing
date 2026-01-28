import express from "express";

const app = express();
const port = 3000;
app.get("/hello", (req, res) => {
  res.send("Hello! This is my custom Express greeting.");
});

app.listen(port, () => {
  console.log("Listening on " + port);
});
