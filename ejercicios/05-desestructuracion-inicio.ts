// Desestructuracion objetos

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 50,
  segundo: 45,
  cancion: 'Smells teen like spirit',
  detalles: {
    autor: 'Nirvana',
    anio: 1994,
  },
};

let { volumen, segundo, cancion, detalles } = reproductor;
let { autor, anio } = detalles;

// console.log('El volumen es ', volumen);
// console.log('El segundo es ', segundo);
// console.log('La cancion se llama ', cancion);
// console.log('Los detalles son ', autor);

// Desestructuracion Arreglos

const hfl: string[] = ['Nietzsche', 'Camus', 'Volchse', 'Buwk'];
const [, , , p3] = hfl;

console.log('Nombres de Escritores ', p3);
