let items = [];

export default class DatabaseCollection {
  errors = null;

  constructor(items) {
    items = items;
  }

  hasErrors() {
    return this.errors !== null;
  }

  add(value) {
    items.push(value);
  }

  items() {
    return items;
  }

  [Symbol.iterator] = function* () {
    for (let key in this.items) {
      yield [key, this.items[key]] // yield [key, value] pair
    }
  }
}