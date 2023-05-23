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

    constructor (name, type = "normal", move = "tackle") {
        this.name = name;
        this.type = type;
        this.move = move;
    };

    // methods
    // getName() {
    //     return this.#name;
    // };
    // getType() {
    //     return this.#type;
    // };
    // getHitPoints() {
    //     return this.#hitPoints;
    // };
    // getDamage() {
    //     return this.#damage;
    // };
    // getMove() {
    //     return this.#move;
    // }; 
    
    isEffectiveAgainst(pokemon) {
        if (pokemon.getType() === this.typeRelationship[this.getType()]) {
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
        console.log(`${this.getName()} used ${this.getMove()}`)
        return this.getDamage();
    };

    hasFainted() {
        let health = this.getHitPoints();
        return health <= 0;
    }
};

module.exports = { Pokemon };