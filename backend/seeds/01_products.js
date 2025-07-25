const { v4: uuidv4 } = require('uuid');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del();

  // Inserts seed entries
  await knex('products').insert([
    {
      id: uuidv4(),
      name: 'Stylischer Hoodie',
      description: 'Bequemer Hoodie mit modernem Design',
      price: 49.99,
      image_url: 'https://via.placeholder.com/300x200.png?text=Hoodie',
      created_at: new Date()
    },
    {
      id: uuidv4(),
      name: 'Vintage T-Shirt',
      description: 'Klassisches Shirt mit Retro-Aufdruck',
      price: 24.99,
      image_url: 'https://via.placeholder.com/300x200.png?text=T-Shirt',
      created_at: new Date()
    },
    {
      id: uuidv4(),
      name: 'Sportliche Sneaker',
      description: 'Perfekt für Alltag und Training',
      price: 79.99,
      image_url: 'https://via.placeholder.com/300x200.png?text=Sneaker',
      created_at: new Date()
    }
  ]);
};
