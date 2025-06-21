const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// POST istekleri için body parser ayarı
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Anasayfa testi
app.get('/', (req, res) => {
  res.send('PayTR Callback Sunucusu Aktif');
});

// 🟢 PAYTR POST bildirimini yakalayan kısım:
app.post('/', (req, res) => {
  console.log('📩 PayTR callback geldi:', req.body);
  res.send('OK'); // PayTR OK cevabı bekler
});

// Server başlat
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`✅ Sunucu çalışıyor: http://localhost:${port}`);
});
