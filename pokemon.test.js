const { Pokemon } = require('./pokemon');

describe('Pokemon class', () => {
    describe('Properties of Pokemon class', () => {
        test('Pokemon have a name property', () => {
            const testPokemon = new Pokemon('Mareep');
            expect(testPokemon.getName()).toBe('Mareep');
        });
    });
    describe('Methods of Pokemon class', () => {

    });
});