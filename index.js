const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/paytr/callback", (req, res) => {
  console.log("Gelen Bildirim:", req.body);
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.send("PayTR Callback Sunucusu Aktif");
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
