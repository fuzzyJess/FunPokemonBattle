const { Pokemon } = require('./pokemon');

describe('Pokemon class', () => {
    describe('Properties of Pokemon class', () => {
        test('Pokemon has a name property', () => {
            const testPokemon = new Pokemon('Mareep');
            expect(testPokemon.getName()).toBe('Mareep');
        });
        test('Pokemon has a type property', () => {
            const testPokemon1 = new Pokemon('Sentret');
            expect(testPokemon1.getType()).toBe('normal');
            const testPokemon2 = new Pokemon('Pikachu');
            expect(testPokemon2.getType()).toBe('normal');
            testPokemon2.setType('electric');
            expect(testPokemon2.getType()).toBe('electric');
        });
    });
    describe('Methods of Pokemon class', () => {

    });
});