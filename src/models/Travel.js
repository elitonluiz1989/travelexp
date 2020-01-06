import Model from "../database/Model";

export default class Travel extends Model {
  table = 'travels';

  id;

  country;

  state_id;

  city;

  arrived_at;

  finished_at;
}