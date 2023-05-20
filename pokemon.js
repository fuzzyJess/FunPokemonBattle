class Pokemon {
    // properties
    #name = "";
    #type = ""
    #hitPoints = 0;
    #damage = 0;
    #move = "";

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
        const effectiveAgainst = {
            fire: "grass",
            water: "fire",
            grass: "water",
            normal: "none"
        };
        if (pokemon.getType() === effectiveAgainst[this.getType()]) {
            return true;
        } else {
            return false;
        }
    };
};

module.exports = { Pokemon };