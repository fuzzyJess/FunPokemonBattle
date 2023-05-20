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
            const testPokemon2 = new Pokemon('Pikachu', 'electric');
            expect(testPokemon2.getType()).toBe('electric');
        });
        test('Pokemon have a hitPoints property', () => {
            const testPokemon = new Pokemon('Togademaru', 'electric', 10);
            expect(testPokemon.getHitPoints()).toBe(10);
        });
        test('Pokemon have a damage property', () => {
            const testPokemon = new Pokemon('Flareon', 'fire', 55, 18);
            expect(testPokemon.getDamage()).toBe(18);
        });
        test('Pokemon have a move property', () => {
            const testPokemon1 = new Pokemon('Ratatta', 30, 20);
            expect(testPokemon1.getMove()).toBe('tackle');
            const testPokemon2 = new Pokemon('Vaporeon', 'water', 70, 19, 'hydro pump');
            expect(testPokemon2.getMove()).toBe('hydro pump');
        });
    });
    describe('Methods of Pokemon class', () => {
        test('Pokemon have an isEffectiveAgainst method', () => {
            const testPokemon1 = new Pokemon('Leafeon', 'grass', 65, 17, 'Giga drain');
            const testPokemon2 = new Pokemon('Flareon', 'fire', 55, 18, 'Fire blast');
            const testPokemon3 = new Pokemon('Vaporeon', 'water', 70, 19, 'hydro pump');
            expect(testPokemon2.isEffectiveAgainst(testPokemon1)).toBe(true);
            expect(testPokemon3.isEffectiveAgainst(testPokemon2)).toBe(true);
            expect(testPokemon1.isEffectiveAgainst(testPokemon2)).toBe(false);
        });
    });
});