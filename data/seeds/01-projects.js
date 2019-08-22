
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          name: 'Mowing the Lawn', 
          description: 'Go outside and get er done!', 
          completed: false
        },
        {
          id: 2, 
          name: 'Clean the House', 
          description: 'Stay inside and Get er Done!', 
          completed: false
        },
        {
          id: 3, 
          name: 'Clean the Garage', 
          description: 'fdfsdfdsfsd', 
          completed: false
        },
      ]);
    });
};
