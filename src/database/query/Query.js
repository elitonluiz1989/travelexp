const whereOperatorHandler = (column, operator, value) => {
  let q = column;
  
  if (operator.trim().toLowerCase() === 'in') {
    if (typeof value === 'array') {
      value = value.join(', ');
    }

    q += ` IN(${value})`; 
  } else {
    q += ` ${operator} ${value}`;
  }

  return q;
};

const whereArgsHandler = args => {
  if (args.length == 2) {
    return {column: args[0], operator: '=', value: args[1]}
  } else if (args.length == 3) {
    return { column, operator, value} = args;
  } else {
    throw new Error('Incorrect number of paramenters on where statement.');
  }
}

export default class Query {
  query = {
    type: null,
    structure: null,
    content: []
  };

  /** STRUCTURE manipulation query */
  name(name) {
    this.query.content.push(name);

    return this;
  }

  table() {
    this.query.structure = 'table';
    this.query.content.push(this.query.structure.toUpperCase());

    return this;
  }

  structure(structure)
  {
    if (this.query.structure === 'table') {
      structure = `(${structure})`;
    }

    this.query.content.push(structure);

    return this;
  }
  
  create() {
    this.query.type = 'create';
    this.query.content.push(this.query.type.toUpperCase());

    return this;
  }

  ifNotExists()
  {
    this.query.content.push('IF NOT EXISTS');

    return this;
  }

  drop() {
    this.query.type = 'drop';
    this.query.content.push(this.query.type.toUpperCase());

    return this;
  }

  /** SELECT query */
  select() {
    let columns = '*';
    this.query.type = 'select';

    if (arguments.length > 0) {
      columns = Array.prototype.join.call(arguments, ', ');
    }

    this.query.content.push(`SELECT ${columns}`);
    
    return this;
  }

  from(table) {
    this.query.content.push(`FROM ${table}`);

    return this;
  }

  as(alias) {
    this.query.content.push(' AS ' + alias);
  }

  where() {
    let {column, operator, value} = whereArgsHandler(arguments);

    let q = 'WHERE ' + whereOperatorHandler(column, operator, value);
    this.query.content.push(q);

    return this;
  }

  and() {
    let {column, operator, value} = whereArgsHandler(arguments);

    let q = 'AND ' + whereOperatorHandler(column, operator, value);
    this.query.content.push(q);

    return this;
  }

  or() {
    let {column, operator, value} = whereArgsHandler(arguments);
    
    let q = 'OR ' + whereOperatorHandler(column, operator, value);
    this.query.content.push(q);

    return this;
  }

  exists(callback, logicalOperator) {
    let starQuery = logicalOperator || 'WHERE';
    let exsQuery = callback();
    this.query.content.push(`${starQuery} ${exsQuery}`);
  }

  make() {
    return this.query.content.join(' ');
  }
}