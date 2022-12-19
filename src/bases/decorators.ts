class NewPokemon {
  constructor(
    public readonly id: number,
    public name: string
  ) {}

  scream() {
    console.log('NOOOOOOOOOOOOO')
  }

  speak() {
    console.log(`${this.name}, ${this.name}`)
  }
}

const MyDecorator = () => {
  // target definicion de la clase
  return (target: Function) => {
    console.log(target)
    return NewPokemon
  }
}

/*
Existen de clase de metodo de atributo
*/

@MyDecorator()
export class Pokemon {

  constructor(
    public readonly id: number,
    public name: string
  ) {}

  scream() {
    console.log(this.name.toUpperCase())
  }

  speak() {
    console.log(`${this.name}, ${this.name}`)
  }
}

export const charmander = new Pokemon(4, 'Charchar');

charmander.scream();
charmander.speak();