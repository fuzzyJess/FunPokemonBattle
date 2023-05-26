class Pokemon {
    // properties
    name = "";
    type = "";
    move = "";
    hitPoints = 0;
    damage = 0;
    
    typeRelationship = {
        fire: "grass",
        water: "fire",
        grass: "water",
        normal: "none"
    };

    constructor (name, type = "normal", move = "tackle", hitPoints, damage) {
        this.name = name;
        this.type = type;
        this.move = move;
        this.hitPoints = hitPoints;
        this.damage = damage;
    };
    
    isEffectiveAgainst(pokemon) {
        if (pokemon.type === this.typeRelationship[this.type]) {
            return true;
        } else {
            return false;
        };
    };

    isWeakTo(pokemon) {
        if (this.type === this.typeRelationship[pokemon.type]) {
            return true;
        } else {
            return false;
        };
    };

    takeDamage(damage) {
        this.hitPoints -= damage;
    };

    useMove() {
        console.log(`${this.name} used ${this.move}`)
        return this.damage;
    };

    hasFainted() {
        let health = this.hitPoints;
        return health <= 0;
    }
};

module.exports = { Pokemon };