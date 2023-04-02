import { Matrix } from "./Matrix";

class Graph<T> extends Matrix<T>{
    private nodes : Array<T>;

    constructor(n: number, init: T | undefined) {
        super(n, n, init);
        this.nodes = [];
    }

    insert(value : T, bind ?: Array<T>) : void {
        this.nodes.push()
    }
}