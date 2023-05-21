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
        test('Pokemon have a isWeakTo method', () => {
            const testPokemon1 = new Pokemon('Leafeon', 'grass', 65, 17, 'Giga drain');
            const testPokemon2 = new Pokemon('Flareon', 'fire', 55, 18, 'Fire blast');
            const testPokemon3 = new Pokemon('Vaporeon', 'water', 70, 19, 'hydro pump');
            expect(testPokemon1.isWeakTo(testPokemon2)).toBe(true);
            expect(testPokemon2.isWeakTo(testPokemon3)).toBe(true);
            expect(testPokemon3.isWeakTo(testPokemon1)).toBe(true);
        });
        test('Pokemon have a takeDamage method', () => {
            const testPokemon1 = new Pokemon('Leafeon', 'grass', 65, 17, 'Giga drain');
            testPokemon1.takeDamage(20);
            expect(testPokemon1.getHitPoints()).toBe(45);
        });
        test('Pokemon have useMove method', () => {
            const testPokemon1 = new Pokemon('Leafeon', 'grass', 65, 17, 'Giga drain');
            expect(testPokemon1.useMove()).toBe(17);
            const testPokemon2 = new Pokemon('Flareon', 'fire', 55, 18, 'Fire blast');
            expect(testPokemon2.useMove()).toBe(18);
        });
    });
});