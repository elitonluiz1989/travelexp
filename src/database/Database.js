import { openDatabase } from "react-native-sqlite-storage";

import { database } from '../../app.json';

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
}