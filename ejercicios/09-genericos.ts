function queTipoSoy<T>(argumento: T) {
  return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(32);
let soyArray = queTipoSoy([21, 32, 32, 6, 54, 25, 5]);

let soyExplicito = queTipoSoy<number>(64);
