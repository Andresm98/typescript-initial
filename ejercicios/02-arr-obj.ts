let habilidades: string[] = ['Bash', 'Counter', 'CLI'];

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: ' ',
  hp: 100,
  habilidades: ['Bash', 'Counter', 'CLI'],
};

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);
