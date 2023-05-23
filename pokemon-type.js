const { Pokemon } = require('./pokemon');

class FireType extends Pokemon {
    isWeakTo = "water";
    isEffectiveAgainst = "grass";

    constructor(type) {
        super(type)
        this.type = 'fire'
    }
};

class WaterType extends Pokemon {
    isWeakTo = "grass";
    isEffectiveAgainst = "fire";
};

class GrassType extends Pokemon {
    isWeakTo = "fire";
    isEffectiveAgainst = "water";
};

module.exports = { FireType, WaterType, GrassType };
