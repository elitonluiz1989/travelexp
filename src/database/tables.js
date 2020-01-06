import Schema from "./query/Schema";

export default () => {
  Schema.table('states', table => {
    table.increments('id');
    
    table.string('name', 100);

    table.string('acronym', 2);
  });

  Schema.table('travels', table => {
    table.increments('id');
    
    table.string('country', 100)
          .default('Brasil');

    table.integer('state_id');

    table.string('city', 100);

    table.date('started_at');

    table.date('finished_at');

    table.foreign('state_id')
          .references('states', 'id');
  });

  Schema.table('expense_types', table => {
    table.increments('id');
    
    table.string('name', 50);
  });

  Schema.table('expenses', table => {
    table.increments('id');
    
    table.integer('travel_id');

    table.date('date');

    table.string('description', 100);

    table.integer('expense_type_id');

    table.decimal('value', 10, 2);

    table.foreign('travel_id')
          .references('travels', 'id');

    table.foreign('expense_type_id')
          .references('expense_types', 'id');
  });
}