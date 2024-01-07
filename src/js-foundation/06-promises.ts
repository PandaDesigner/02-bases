import { httpClientPlughin as httpClient } from '../plugins';

export const getPokemonById = async (id: number | string): Promise<String> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await httpClient.get(url);

  /* 
  const resp = await fetch(url);
  const pokemon = await resp.json(); */

  //NOTE - throw new Error('Pokemon no existe');

  return pokemon.name;

  /* return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => pokemon.name); */
};
