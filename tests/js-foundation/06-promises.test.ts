import { getPokemonById } from '../../src/js-foundation/06-promises';


describe('js-foundation/06-promises.test.ts', () => {

    test('getPokemonById should return a pokemon', async () => {
        const pokemonId = 1;
        const pokemonName = 'bulbasaur';
        const pokemon = await getPokemonById(pokemonId);
        expect(pokemon).toBe(pokemonName);
    });

    test('getPokemonById should return an error if pokemon does not exist', async () => {
        const pokemonId = 1000000000;
        try {
            await getPokemonById(pokemonId);
            expect(true).toBe(false);
        } catch (error) {
            expect(error).toBe(`Pokemon does not exist with id ${pokemonId}`);
        }
    });

});