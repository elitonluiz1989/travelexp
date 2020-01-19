import Columns from "./Columns";
import DatabaseTables from "../tables.js";
import Query from "./Query";

export default class Schema {
  static tables = [];

  static table(name, instruction) {
    columns = new Columns()
    instruction(columns);    

    let query = new Query()
                .create()
                .table()
                .ifNotExists()
                .name(name)
                .structure(columns.make())
                .make();                
    columns = null;

    this.tables.push({name: name, query: query});

    return query;
  }

  static getTables() {
    DatabaseTables();

    return this.tables;
  }
}