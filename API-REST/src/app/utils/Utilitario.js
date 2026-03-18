class Utilitario {

 isEmpty(value) {
  return (
    value === null || // null
    value === undefined || // undefined
    (typeof value === 'string' && value.trim().length === 0) || 
    (Array.isArray(value) && value.length === 0) || // array vazio
    (value.constructor === Object && Object.keys(value).length === 0) // objeto vazio
  );
}

}

export default new Utilitario()