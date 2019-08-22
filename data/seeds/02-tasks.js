
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1, 
          description: 'Fill up machine with gas', 
          notes: 'I hate to do this', 
          completed: false, 
          project_id: 1
        },
        {
          id: 2, 
          description: 'Buy bags to store clippings', 
          notes: 'I like to do this', 
          completed: false, 
          project_id: 1
        },
        {
          id: 3, 
          description: 'Buy house supplies to clean', 
          notes: 'Can you believe i do this stuff?', 
          completed: false, 
          project_id: 2
        },
        {
          id: 4, 
          description: 'Buy Brooms to sweep', 
          notes: 'Can you believe i do this stuff?', 
          completed: false, 
          project_id: 3
        },
        {
          id: 5, 
          description: 'Buy mop and other supplies', 
          notes: 'Can you believe i do this stuff?', 
          completed: false, 
          project_id: 3
        },
      ]);
    });
};
