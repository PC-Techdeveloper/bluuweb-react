import type { Pokemon } from '../types/pokemon.intarface';
/* Importando la función getRandomInclusive */
import { getRandomInclusive } from '../Components/lib/random-number';

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon';
const MAX_POKEMON_COUNT = 151;

const fakePromise = <T>(data: T, delay: number = 1000): Promise<T> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, delay);
  });
};

const getRandomPokemon = async (): Promise<Pokemon> => {
  const randomId = getRandomInclusive(1, MAX_POKEMON_COUNT);
  const response = await fetch(`${POKEMON_API_URL}/${randomId}`);

  await fakePromise(null, 1000); //Simulate network delay

  if (!response.ok) {
    throw new Error(`Error fetching Pokémon with ID ${randomId}`);
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other['official-artwork'].front_default
  };
};

const normalizePokemon = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .normalize('NFD') //Normaliza a caracteres acentuados...
    .replace(/[\u0300-\u036f]/g, '') //Elimina los acentos...
    .replace(/[^a-z0-9]/g, ''); //Elimina los caracteres especiales...
};

const isPokemonNameValid = (
  pokemonName: string,
  userInput: string
): boolean => {
  const normalizedPokemonName = normalizePokemon(pokemonName);
  const normalizedUserInput = normalizePokemon(userInput);

  return normalizedPokemonName === normalizedUserInput;
};

export const pokemonService = {
  getRandomPokemon,
  isPokemonNameValid
};
