const express = require('express');
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  console.log('PayTR callback geldi:', req.body);
  res.send('OK');
});

app.get('/', (req, res) => {
  res.send('PayTR Callback Sunucusu Aktif');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
