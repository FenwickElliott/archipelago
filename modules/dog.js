import { Animal } from './animal.js';

export class Dog extends Animal {
    constructor(name, toes) {
        super(name)
        this._toes = toes
        this._loved = true
    }
}