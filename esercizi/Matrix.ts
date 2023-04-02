class MatrixRangeError extends Error {}
class MatrixInsertError extends Error {}

export class Matrix<T> {
    private rows : number;
    private columns : number;
    private mainArr : Array<Array<T | undefined>>;
    private init : T | undefined;

    static fromArray<T>(a : Array<Array<T | undefined>>) : Matrix<T> {
        let max = [...a].sort((x : Array<T | undefined>, y : Array<T | undefined>) : number => {
            if(x.length > y.length) return -1;
            else if(x.length < y.length) return 1;
            return 0;
        })[0].length;

        let newMatrix = new Matrix<T>(a.length, max);
        for(let i = 0; i < a.length; i++) for(let j = 0; j < max; j++) if(a[i][j]) newMatrix.insert(a[i][j] as T, i, j);
        return newMatrix;
    }

    constructor(n : number, m : number, init : T | undefined = undefined) {
        this.rows = n;
        this.columns = m;
        this.mainArr = [];
        this.init = init;

        for(let i = 0; i < this.rows; i++) {
            let newArr: Array<T | undefined> = [];
            for(let j = 0; j < this.columns; j++) newArr.push(init);
            this.mainArr.push(newArr);
        }
    }

    *[Symbol.iterator]() : Generator<T | undefined>{
        for(let i: number = 0; i < this.rows; i++) for(let j: number = 0; j < this.columns; j++) yield this.mainArr[i][j];
    }

    get size(): Record<string, number> {
        return {rows: this.rows, columns: this.columns};
    }

    print(): void {
        for(let row of this.mainArr) console.log(row);
    }

    insert(value: T, i: number | undefined = undefined, j: number | undefined = undefined) : void {
        if(i && i >= this.rows || j && j >= this.columns) throw new MatrixRangeError();
        if(i != undefined && j != undefined) this.mainArr[i][j] = value;
        else if(i != undefined && j == undefined){
            let k: number = 0;
            for(k = 0; k < this.columns; k++)
                if(this.mainArr[i][k] == this.init){
                    this.mainArr[i][k] = value;
                    return;
                }
            throw new MatrixInsertError();
        } else if(i == undefined && j != undefined){
            let k: number = 0;
            for(k = 0; k < this.rows; k++)
                if(this.mainArr[k][j] == this.init){
                    this.mainArr[k][j] = value;
                    return;
                }
            throw new MatrixInsertError();
        } else if(i == undefined && j == undefined){
            let k: number = 0;
            let l: number = 0;
            for(k = 0; k < this.rows; k++)
                for(l = 0; l < this.columns; l++)
                    if(this.mainArr[k][l] == this.init){
                        this.mainArr[k][l] = value;
                        return;
                    }
            throw new MatrixInsertError();
        }
    }

    delete(i: number, j: number) {
        if(i != undefined && j != undefined){
            if(i >= this.rows || j >= this.columns) throw new MatrixRangeError();
            this.mainArr[i][j] = this.init;
        } 
        else if(i != undefined && j == undefined) for(let k = 0; k < this.columns; k++) this.mainArr[i][k] = this.init;
        else if(i == undefined && j != undefined) for(let k = 0; k < this.rows; k++) this.mainArr[k][j] = this.init;
        else if(i == undefined && j == undefined) for(let k = 0; k < this.rows; k++) for(let l = 0; l < this.columns; l++) this.mainArr[k][l] = this.init;
    }

    clone(): Matrix<T> {
        let newMatrix = new Matrix<T>(this.rows, this.columns, this.init)
        for(let i = 0; i < this.rows; i++) for(let j = 0; j < this.columns; j++) if(this.mainArr[i][j]) newMatrix.insert(this.mainArr[i][j] as T, i, j);
        return newMatrix
    }
}

let m = new Matrix<number>(3,3);
m.insert(1, undefined, 2)
m.print()