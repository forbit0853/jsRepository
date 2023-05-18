class Animal {

    constructor(type) {
        this._type = type;
    }


    move(){
        return 'якось рухається!';
    }

        toString() {
           return `тварина типy - ${this._type}. Boна - ${this.move()}`;
        }
}




















