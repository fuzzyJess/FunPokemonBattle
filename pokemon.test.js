const { Pokemon } = require('./pokemon');
const { FireType, WaterType, GrassType } = require('./pokemon-type');
const { Charmander, Squirtle } = require('./pokemon-species')

describe('Pokemon class', () => {
    describe('Properties of Pokemon class', () => {
        test('Pokemon have a name property', () => {
            const testPokemon = new Pokemon('Mareep');
            expect(testPokemon.name).toBe('Mareep');
        });
        test('Pokemon have a move property', () => {
            const testPokemon1 = new Pokemon('Ratatta');
            expect(testPokemon1.move).toBe('tackle');
            const testPokemon2 = new Pokemon('Vaporeon', 'water', 'hydro pump');
            expect(testPokemon2.move).toBe('hydro pump');
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
            const testPokemon1 = new Charmander('Toasty');
            testPokemon1.takeDamage(20);
            expect(testPokemon1.hitPoints).toBe(35);
        });
    });
});

describe('PokemonType classes', () => {
    describe('Properties of Fire Type class', () => {
        test('FireType Pokemon have isEffectiveAgainst property', () => {
            const testPokemon = new FireType('Flareon', 'fire', 55, 18, 'Fire blast');
            expect(testPokemon.isEffectiveAgainst).toBe('grass');
        });
        test('FireType Pokemon have isWeakTo property', () => {
            const testPokemon = new FireType('Flareon', 'fire', 55, 18, 'Fire blast');
            expect(testPokemon.isWeakTo).toBe('water');
        });
    });
    describe('Properties of Water Type class', () => {
        test('WaterType Pokemon have isEffectiveAgainst property', () => {
            const testPokemon = new WaterType('Vaporeon', 'water', 70, 19, 'hydro pump');
            expect(testPokemon.isEffectiveAgainst).toBe('fire');
        });
        test('WaterType Pokemon have isWeakTo property', () => {
            const testPokemon = new WaterType('Vaporeon', 'water', 70, 19, 'hydro pump');
            expect(testPokemon.isWeakTo).toBe('grass');
        });
    });
    describe('Properties of Grass Type class', () => {
        test('GrassType Pokemon have isEffectiveAgainst property', () => {
            const testPokemon = new GrassType('Leafeon', 'grass', 65, 17, 'Giga drain');
            expect(testPokemon.isEffectiveAgainst).toBe('water');
        });
        test('GrassType Pokemon have isWeakTo property', () => {
            const testPokemon = new GrassType('Leafeon', 'grass', 65, 17, 'Giga drain');
            expect(testPokemon.isWeakTo).toBe('fire');
        });
    });
});

describe('PokemonSpecies classes', () => {
    describe('Properties of PokemonSpecies classes', () => {
        test('Charmander has a move property', () => {
            const testPokemon = new Charmander('Toasty');
            expect(testPokemon.move).toBe('ember');
        });
        test('Charmander has a type property', () => {
            const testPokemon = new Charmander('Toasty');
            console.log(testPokemon)
            expect(testPokemon.type).toBe('fire');
        });
        test('Charmander has a hitPoints property', () => {
            const testPokemon = new Charmander('Toasty');
            expect(testPokemon.hitPoints).toBe(55);
        });
        test('Charmander has a damage property', () => {
            const testPokemon = new Charmander('Toasty');
            expect(testPokemon.damage).toBe(17);
        });
        test('Charmander has a move property', () => {
            const testPokemon = new Charmander('Toasty');
            expect(testPokemon.move).toBe('ember');
        });
        test('Charmander has a useMove method', () => {
            const testPokemon1 = new Charmander('Toasty');
            expect(testPokemon1.useMove()).toBe(17);
        });
        test('Charmander has a hasFainted method', () => {
            const testPokemon = new Charmander('Toasty');
            testPokemon.takeDamage(45);
            expect(testPokemon.hasFainted()).toBe(false);
            testPokemon.takeDamage(20);
            expect(testPokemon.hasFainted()).toBe(true);
        });
        test('Squirtle has the move water gun and correct values for other properties', () => {
            const testPokemon = new Squirtle('Dampy');
            expect(testPokemon.move).toBe('water gun');
            expect(testPokemon.name).toBe('Dampy');
            expect(testPokemon.hitPoints).toBe(44);
            expect(testPokemon.damage).toBe(16);
        });
    });
});