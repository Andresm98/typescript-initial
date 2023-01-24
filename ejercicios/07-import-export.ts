import { Producto, calculaISV } from './06-desestructuracion-av';

const carritoCompras: Producto[] = [
  {
    desc: 'Telf 1',
    precio: 100,
  },
  {
    desc: 'Telf 2',
    precio: 400,
  },
  {
    desc: 'Telf 3',
    precio: 400,
  },
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total ', total);
console.log('ISV ', isv);
