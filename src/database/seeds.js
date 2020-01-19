import State from "../models/State";

export default async () => {
  let state = new State();

  state.create([
    {
      name: 'Mato Grosso do Sul',
      acronym: 'MS'
    }
  ]);
}