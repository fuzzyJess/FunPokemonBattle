const { Pokemon } = require('./pokemon');

class FireType extends Pokemon {
    isWeakTo = "water";
    isEffectiveAgainst = "grass";
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
