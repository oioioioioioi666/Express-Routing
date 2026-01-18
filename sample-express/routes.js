import fetch from "node-fetch";
export const hello = () => (req, res) => {
  res.send("Hello World!");
};
export const apiNames = () => async (req, res) => {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";
  let data;

  try {
    const response = await fetch(url);
    data = await response.json(); 
  } catch (err) {
    return res.status(500).send("API fetch failed.");
  }

  const rows = data.map((u) => `${u.name} - ${u.id}`).join("<br>");

  res.send(rows);
};
