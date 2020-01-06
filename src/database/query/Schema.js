import Columns from "./Columns";
import definingTables from "../tables.js";
import Query from "./Query";

export default class Schema {
  static tables = [];
  static seeds = [];

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

  static seed(instruction)
  {
    query = new Query();
    instruction(query);

    this.seeds.push({})

  }

  static getTables() {
    definingTables();

    return this.tables;
  }

  static getSeeds()
  {
    return this.seeds;
  }
}