import Query from "./query/Query";
import Database from "./Database";
import DatabaseCollection from "./DatabaseCollection";

const selectErrorHandler = error => {
  let result = new DatabaseCollection();
      result.errors = error.message;
  
  return result;
};

export default class Model extends Database {
  table = null;
  query = null;
  errors = [];

  constructor() {
    this.query = new Query();
  }

  /* SELECT */
  select() {
    return this.query.select();
  }

  async all() {
    let result = null;
    let query = this.select()
                    .from(this.table)
                    .make();    

    await this.execute(query)
              .then(success => {
                let collection = new DatabaseCollection();
                if (success.rows.length > 0) {
                  collection = success;
                }
    
                result = collection;
              })
              .catch(error => {
                result = selectErrorHandler(error);
              });
      
    return result;
  }

  async find(id) {
    let result = null;
    let query = this.select()
                    .from(this.table)
                    .where('id', id)
                    .make();

    await this.execute(query)
              .then(success => {
                let model = null;
                if (success.rows.length > 0) {
                  model = success;
                }

                result = model;
              })
              .catch(error => {
                result = selectErrorHandler(error);
              });

    return result;    
  }

  async save() {
    let result = null;
    let query = new Query();
    let fields = [];
    let values = [];
    
    if (this[this.primary] !== null && this[this.primary] > 0) {
      let setValues = [];
      Object.keys(this).forEach(property => {
        if (this[property] !== null) {
          setValues.push(`${property} = ${this[property]}`);
        }
      });

      query.update();
    } else {
      Object.keys(this).forEach(property => {
        if (this[property] !== null) {
          fields.push(property);
          values.push(this[property]);
        }
      });

      let query = query.insert()
                      .into(this.table)
                      .fields(fields);      

      console.log(query)
    }
    
    /*await this.execute(query.make(), values)
              .then(success => {
                result = success.rowsAffected;
              })
              .catch(error => {
                result = selectErrorHandler(error);
              });*/

    return result;    
  }
}