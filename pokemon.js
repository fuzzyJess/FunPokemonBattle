class Pokemon {
    // properties
    #name = "";
    #type = "normal"
    #hitPoints = 0;
    #damage = 0;

    constructor (name, hp, damage) {
        this.#name = name;
        this.#hitPoints = hp;
        this.#damage = damage;
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
    };
    getDamage() {
        return this.#damage;
    };
          
};

module.exports = { Pokemon };