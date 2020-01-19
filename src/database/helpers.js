const modelPropsHandler = model => {
  props = {
    fields: [],
    values: []
  }

  Object.keys(model).forEach(property => {
    if (model[property] !== null) {
      props.fields.push(property);
      props.values.push(model[property]);
    }
  });

  return props;
}

export { modelPropsHandler };