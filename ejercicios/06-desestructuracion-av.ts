interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: 'Nokia HS',
  precio: 40,
};

const tableta: Producto = {
  desc: 'Iphad 4',
  precio: 60,
};

function calculaISV(productos: Producto[]): [number, number] {
  let total = 0;

  productos.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * 0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calculaISV(articulos);

console.log('Total ', total);
console.log('ISV ', isv);

export { Producto, calculaISV };
