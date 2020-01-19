import Database from "./Database";
import Schema from "./query/Schema.js";
import Query from "./query/Query.js"

import DatabaseSeed from './seeds';

export const DatabaseInitialize = async () => {
  let db = new Database();

  await db.transaction(async () => {
    let tableExistsQuery = null;
    for (let table of Schema.getTables()) {
      tableExistsQuery = new Query()
        .select('name')
        .from('sqlite_master')
        .where('type', "'table'")
        .and('name', `'${table.name}'`)
        .make();

      let tableExists = await db.execute(tableExistsQuery);

      if (tableExists.rows.length === 0) {
        db.execute(table.query)
          .then(() => console.log(`Table ${table.name} was created.`))
          .catch(error => {
            console.log(`There was an error and the table ${table.name} was not created. Error: ${error.message}.`);
          });
      }
    }
  });

  await DatabaseSeed();
}