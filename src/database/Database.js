import { openDatabase } from "react-native-sqlite-storage";

import { database } from '../../app.json';
import Schema from "./query/Schema.js";
import Query from "./query/Query.js";

let db = null;
let inTransaction = false;

export default class Database {
  open() {    
    db = openDatabase(
      { ...database },
      () => console.log('Database connection openned'), 
      error => console.log('Database connection was not openned. Error: ' + error)
    );
  }

  async execute(sql, params) {
    params = params || [];

    return this.promise((resolve, reject) => {        
        try {
          db.executeSql(
            sql, 
            params, 
            res => {
              resolve(res);
            },
            err => {
              reject(err)
            }
          );
        } catch(ex) {
          reject(ex)
        }
      });
  }

  async transaction(action) {
    return this.promise(async (resolve, reject) => {
      inTransaction = true;
      this.open();

      try {
        await this.execute('BEGIN TRANSACTION');
        console.log('Transaction openned.');
        
        await action();

        await this.execute('COMMIT');
        console.log('Transaction commited.')

        resolve(true);
      } catch(ex) {
        await this.execute('ROLLBACK')
        console.log('Transaction rollbacked.')

        reject(ex);
      }
    })
    .finally(() => {
      inTransaction = false;
      this.close();
    });
  }

  async close() {
    return new Promise((resolve, reject) => {
      if (db) {
        db.close(
          () => console.log('Databse closed'), 
          err => reject(err)
        );

        resolve('Databse closed')
      } else {
        reject("Database was not openned");
      }
    });
  }

  promise(action) {    
    return new Promise((resolve, reject) => {
      if (!inTransaction) {
        this.open();
      }

      action(resolve, reject);
    })
    .finally(() => {
      if (!inTransaction) {
        this.close();
      }
    });
  }

  async init() {
    /* Creating tables */
    return this.transaction(async () => {      
      let tableExistsQuery = null;
      for (let table of Schema.getTables()) {
        tableExistsQuery = new Query()
                          .select('name')
                          .from('sqlite_master')
                          .where('type', "'table'")
                          .and('name', `'${table.name}'`)
                          .make();

        let tableExists = await this.execute(tableExistsQuery);
        
        if (tableExists.rows.length === 0) {
          this.execute(table.query)
              .then(() => console.log(`Table ${table.name} was created.`))
              .catch(error => {
                console.log(`There was an error and the table ${table.name} was not created. 
                            Error: ${error.message}.`);
              });
        }
      }
    });
  }
}