import { Matrix } from "./Matrix";

class MatrixGraph<T> {
    private nodes : Array<T>;
    private matrix : Matrix<T>;

    constructor(n : number, init ?: T, nodes ?: Array<T>) {
        this.nodes = (nodes) ? nodes : [];
        this.matrix = new Matrix(n, n, init);
    }
}

class ListGraph<T> {
    private mainArr : Array<[T | number]>;

    constructor(...nodes : Array<T>) {
        this.mainArr = [];
        for(let i of nodes) this.mainArr.push([i]);
    }

    print() : void{
        for(let i of this.mainArr) console.log(i);
    }
}

let g = new ListGraph<string>('a', 'b', 'c', 'd', 'e', 'f');
g.print()