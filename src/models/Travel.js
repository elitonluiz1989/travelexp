import Model from "../database/Model";

export default class Travel extends Model {
  table = 'travels';

  constructor() {
    super();
  }

  attributes = {
    id: 'int',
    country: 'string',
    state_id: 'int',
    city: 'string',
    arrived_at: 'datetime',
    finished_at: 'datetime'
  }
}