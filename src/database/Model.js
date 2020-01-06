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
    super();

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

  save() {
    let query = new Query();
    if (this[this.primary] !== null && this[this.primary] > 0) {
      let setValues = [];
      Object.keys(this).forEach(property => {
        if (this[property] !== null) {
          setValues.push(`${property} = ${this[property]}`);
        }
      });

      query.update();
    } else {
      let fields = [];
      let values = [];
      Object.keys(this).forEach(property => {
        if (this[property] !== null) {
          fields.push(property);
          values.push(this[property]);
        }
      });

      query.insert()
            .into(this.table)
            .fields(fields)
            .values(fields);
    }
    
    await this.execute(query.make())
              .then(success => {
                result = success.rowsAffected;
              })
              .catch(error => {
                result = selectErrorHandler(error);
              });

    return result;    
  }
}