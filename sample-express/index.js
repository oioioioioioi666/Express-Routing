import express from "express";
import { hello, apiNames } from "./routes.js";

const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send('Go to <a href="/hello">/hello</a> or <a href="/api/names">/api/names</a>');
});
app.get("/hello", hello());
app.get("/api/names", apiNames());

app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`);
});
