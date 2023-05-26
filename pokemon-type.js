const { Pokemon } = require('./pokemon');

class FireType extends Pokemon {
    isWeakTo = "water";
    isEffectiveAgainst = "grass";

    constructor(type, hitPoints) {
        super(type, hitPoints)
        this.type = 'fire'
    };
};

class WaterType extends Pokemon {
    isWeakTo = "grass";
    isEffectiveAgainst = "fire";

    constructor(type) {
        super(type)
        this.type = 'water'
    };
};

class GrassType extends Pokemon {
    isWeakTo = "fire";
    isEffectiveAgainst = "water";

    constructor(type) {
        super(type)
        this.type = 'grass'
    };
};

module.exports = { FireType, WaterType, GrassType };
