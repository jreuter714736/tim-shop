const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { v4: uuidv4 } = require('uuid');

router.get('/', async (req, res) => {
  try {
    const products = await db('products').select('*');
    res.json(products);
  } catch (error) {
    console.error('Fehler beim Laden der Produkte:', error);
    res.status(500).json({ error: 'Interner Serverfehler' });
  }
});


router.post('/', async (req, res) => {
  const { name, price, description, image_url } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name und Preis sind Pflichtfelder' });
  }

  try {
    await db('products').insert({
      id: uuidv4(),
      name,
      price,
      description,
      image_url,
      created_at: new Date()
    });

    res.status(201).json({ message: 'Produkt erfolgreich erstellt' });
  } catch (error) {
    console.error('Fehler beim Erstellen des Produkts:', error);
    res.status(500).json({ error: 'Fehler beim Speichern in der Datenbank' });
  }
});

module.exports = router;

