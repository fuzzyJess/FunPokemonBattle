class Pokemon {
    // properties
    #name = "";
    #type = "normal"
    constructor (name) {
        this.#name = name;
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
    }
};

module.exports = { Pokemon };