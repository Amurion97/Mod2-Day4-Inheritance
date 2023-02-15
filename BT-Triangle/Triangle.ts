import {Shape} from "./Shape";

export class Triangle extends Shape{
    private _side1: number;
    private _side2: number;
    private _side3: number;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    get side1(): number {
        return this._side1;
    }

    get side2(): number {
        return this._side2;
    }

    get side3(): number {
        return this._side3;
    }

    set side1(value: number) {
        this._side1 = value;
    }

    set side2(value: number) {
        this._side2 = value;
    }

    set side3(value: number) {
        this._side3 = value;
    }

    getArea(): number {
        return Math.sqrt(4*Math.pow(this.side1*this.side2,2) - Math.pow(this.side1**2 + this.side2**2 - this.side3**2,2))/4;
    }

    getPerimeter ():number {
        return this.side1 + this.side2 + this.side3;
    }
}