
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1, 
          name: 'LawnMower',
          description: 'New state of the art machine'
        },
        {
          id: 2, 
          name: 'Broom',
          description: 'Needed for garage and house'
        },
        {
          id: 3, 
          name: 'Mop',
          description: 'Needed for house and garage'
        },
        {
          id: 4, 
          name: 'Dustpan',
          description: 'Need just for garage'
        },
        {
          id: 5, 
          name: 'Cleaning supplies for house only',
          description: 'House only supplies'
        },
      ]);
    });
};
