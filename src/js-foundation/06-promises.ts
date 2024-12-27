import { httpClientPlughin as httpClient } from '../plugins';

export const getPokemonById = async (id: number | string): Promise<String> => {

  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClient.get(url);
    return pokemon.name;

  } catch (error) {
    throw `Pokemon does not exist with id ${id}`;
  }
  /* 
  const resp = await fetch(url);
  const pokemon = await resp.json(); */

  //NOTE - throw new Error('Pokemon no existe');


  /* return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => pokemon.name); */
};
