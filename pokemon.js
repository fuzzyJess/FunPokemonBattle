class Pokemon {
    // properties
    #name = "";
    #type = ""
    #hitPoints = 0;
    #damage = 0;
    #move = "";
    typeRelationship = {
        fire: "grass",
        water: "fire",
        grass: "water",
        normal: "none"
    };

    constructor (name, type = "normal", hp, damage, move = "tackle") {
        this.#name = name;
        this.#type = type;
        this.#hitPoints = hp;
        this.#damage = damage;
        this.#move = move;
    };

    // methods
    getName() {
        return this.#name;
    };
    getType() {
        return this.#type;
    };
    getHitPoints() {
        return this.#hitPoints;
    };
    getDamage() {
        return this.#damage;
    };
    getMove() {
        return this.#move;
    }; 
    
    isEffectiveAgainst(pokemon) {
        if (pokemon.getType() === this.typeRelationship[this.getType()]) {
            return true;
        } else {
            return false;
        };
    };

    isWeakTo(pokemon) {
        if (this.getType() === this.typeRelationship[pokemon.getType()]) {
            return true;
        } else {
            return false;
        };
    };

    takeDamage(damage) {
        this.#hitPoints -= damage;
    };

    useMove() {
        console.log(`${this.getName()} used ${this.getMove()}`)
        return this.getDamage();
    };
};

module.exports = { Pokemon };