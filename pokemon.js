class Pokemon {
    // properties
    #name = "";
    constructor (name) {
        this.#name = name;
    };

    // methods
    getName() {
        return this.#name;
    }
};

module.exports = { Pokemon };