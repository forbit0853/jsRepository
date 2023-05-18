class Rectangle extends Shape {
    #width;
    #height;

    constructor(w, h) {
        super('прямокутник');
        this.#width = w;
        this.#height = h;
    }

    calcSquare() {
        return this.#width * this.#height;
    }
    
    toString() {
        return `${super.toString()}. Ширина: ${this.#width}cm, висота: ${this.#height}cm`;
    }
}