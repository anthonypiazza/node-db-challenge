
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id');
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.text('description', 256)
        tbl.boolean('completed')
            .defaultTo(false)
            .notNullable();
    })
    .createTable('tasks', tbl => {
        tbl.increments('id');
        tbl.text('description', 128)
            .unique()
            .notNullable();
        tbl.text('notes', 256)
        tbl.boolean('completed')
            .defaultTo(false)
            .notNullable();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('resources', tbl => {
        tbl.increments('id');
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.text('description', 256);
    })
    .createTable('projects_resources', tbl => {
        tbl.increments('id');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
