const verifyLength = (type, length) => {
  type = ' ' + type.trim();
  if (typeof length === 'number' && length > 0)
    type += `(${length})`;

  return type;
}

const isVarchar = field => field.toLowerCase().includes('varchar');

export default class Columns {
  field = [];
  columns = [];

  make() {
    this.add();

    return this.columns.join(', ');
  }

  add() {
    if (this.field.length > 0) {
      let fieldStr = this.field.join(' ');
      this.columns.push(fieldStr);
      this.field = [];
    }
  }

  increments(name, length) {
    let field = name + verifyLength('INTEGER', length) + ' PRIMARY KEY AUTOINCREMENT';
    this.columns.push(field);
    
    return this;
  }

  integer(name, length) {
    this.add();

    this.field.push(name + verifyLength('INTEGER', length));

    return this;
  }

  decimal(name, length, precision) {
    this.add();

    this.field.push(`${name} DECIMAL(${length}, ${precision})`);

    return this;
  }

  date(name) {
    this.add();

    this.field.push(name + ' INTEGER');

    return this;
  }

  string(name, length) {
    this.add();

    this.field.push(name + verifyLength('VARCHAR', length));

    return this;
  } 
  
  default(value) {
    if (isVarchar(this.field[0])) {
        value = `'${value}'`;
    }

    this.field.push(' DEFAULT ' + value);

    return this;
  }
  
  nullable() {    
    this.field.push(' DEFAULT NULL');

    return this;
  }

  foreign(colunm) {
    this.add();

    this.field.push(`FOREIGN KEY(${colunm})`);

    return this;
  }

  references(table, colunm) {    
    this.field.push(`REFERENCES ${table}(${colunm})`);

    return this;
  }

  onUpdate(option) {
    this.field.push(`ON UPDATE ${option.toUpperCase()}`);
  }

  onDelete(option) {
    this.field.push(`ON DELETE ${option.toUpperCase()}`);
  }
}