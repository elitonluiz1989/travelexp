import Model from "../database/Model";

export default class State extends Model {
  table = 'states';
  
  constructor() {
    super();
  }

  attributes = {
    id: 'int',
    name: 'string',
    acronym: 'string'
  }
}