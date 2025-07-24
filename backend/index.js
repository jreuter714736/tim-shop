const express = require('express');
const cors = require('cors');
require('dotenv').config();
const productRoutes = require('./routes/products'); //

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes); // 

app.get('/', (req, res) => {
  res.send('Backend läuft');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
