const { Pokemon } = require('./pokemon');

describe('Pokemon class', () => {
    describe('Properties of Pokemon class', () => {
        test('Pokemon have a name property', () => {
            const testPokemon = new Pokemon('Mareep');
            expect(testPokemon.getName()).toBe('Mareep');
        });
        test('Pokemon have a type property', () => {
            const testPokemon1 = new Pokemon('Sentret');
            expect(testPokemon1.getType()).toBe('normal');
            const testPokemon2 = new Pokemon('Pikachu');
            expect(testPokemon2.getType()).toBe('normal');
            testPokemon2.setType('electric');
            expect(testPokemon2.getType()).toBe('electric');
        });
        test('Pokemon have a hitPoints property', () => {
            const testPokemon = new Pokemon('Togademaru', 10);
            expect(testPokemon.getHitPoints()).toBe(10);
        });
    });
    describe('Methods of Pokemon class', () => {

    });
});