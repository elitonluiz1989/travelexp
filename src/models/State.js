import Model from "../database/Model";

export default class State extends Model {
  table = 'states';
  
  constructor(props) {
    super(props);
  }

  attributes = {
    id: 'int',
    name: 'string',
    acronym: 'string'
  }
}