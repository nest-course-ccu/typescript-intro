import { PokeApiAdapter, HttpAdapter, PokeApiFetchAdapter } from '../api/poke-api.adapter';
import { Move, PokeAPIResponse } from "./interfaces/pokeapi-response.interface";

export const name: string = "Carla";

export const age: number = 26;

export const isValid: boolean = false;

export const templateString = `
Este es un template string
quede puede tener ' o '' ${name}
expresiones ${1 + 1}
boolean ${isValid}`;

export const ids = [1, 20, 10];

interface IPokemon {
  id: number;
  name: string;
  age?: number;
}

export const pokemon: IPokemon = {
  id: 1,
  name: "Charmander",
  age: 1,
};

export const partialPokemon: Partial<IPokemon> = {
  id: 2,
};

/*
Las interfaces no se ueden instanciar 
para ello se necesitan clases
*/

export const pokemons: IPokemon[] = [];

pokemons.push(pokemon);

export class Pokemon {
  constructor(
    // readonly para no poder cambiarlo
    public readonly id: number,
    public readonly name: string,
    private readonly http: HttpAdapter
  ) {}

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}`;
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeAPIResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );
    console.log(data.moves);
    return data.moves;
  }
}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter()
export const charizard = new Pokemon(4, "Charizard", pokeApiFetch);
export const pikachu = new Pokemon(4, "Pikachu", pokeApiAxios);
