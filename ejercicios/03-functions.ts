function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

const resultadoSumar = sumar(2, 33);

console.log(resultadoSumar);

// obligatorios -> opcionales -> inicializados
function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 5
): number {
  return numero * base;
}

const resultadoMult = multiplicar(5);
const resultadoMult2 = multiplicar(5, 5, 7);

console.log(resultadoMult);
console.log(resultadoMult2);

console.log('==================');

//

interface PersonajeLRD {
  nombre: string;
  pv: number;
  mostrarHp: () => void;
}

function curar(personaje: PersonajeLRD, curarX: number): void {
  personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLRD = {
  nombre: 'Strider',
  pv: 50,
  mostrarHp() {
    console.log('PV ', this.pv);
  },
};

curar(nuevoPersonaje, 230);
nuevoPersonaje.mostrarHp();
