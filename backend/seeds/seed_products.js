const { v4: uuidv4 } = require('uuid');

exports.seed = async function(knex) {
  // Tabelle leeren
  await knex('products').del();

  // Neue Produkte einfügen
  await knex('products').insert([
    {
      id: uuidv4(),
      name: 'Handgemachte Holz-Kette',
      price: 990, // in Cent
      description: 'Liebevoll gefertigte Kette aus nachhaltigem Holz.',
      image_url: 'https://via.placeholder.com/150'
    },
    {
      id: uuidv4(),
      name: 'Geflochtenes Armband',
      price: 1290,
      description: 'Aus veganem Leder mit einstellbarem Verschluss.',
      image_url: 'https://via.placeholder.com/150'
    }
  ]);
};
