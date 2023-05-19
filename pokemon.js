class Pokemon {
    // properties
    #name = "";
    #type = "normal"
    #hitPoints = 0;
    constructor (name, hp) {
        this.#name = name;
        this.#hitPoints = hp;
    };

    // methods
    getName() {
        return this.#name;
    };
    getType() {
        return this.#type;
    };
    setType(newType) {
        this.#type = newType;
    };
    getHitPoints() {
        return this.#hitPoints;
    }
    
};

module.exports = { Pokemon };