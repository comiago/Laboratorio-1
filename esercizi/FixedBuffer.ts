class FixedBuffer<T>{
    buffer : number;
    arr : Array<T>;

    constructor(n : number){
        this.buffer = n;
        this.arr = [];
    }

    put(...args : Array<T>) : void{
        for(let i of args) if(this.arr.length < this.buffer) this.arr.push(i);
    }

    get() : T{
        let e = this.arr[0];
        this.arr.shift();
        return e;
    }

    peek() : T{
        return this.arr[0];
    }

    clear() : void{
        this.arr.length = 0;
    }
}

var fb=new FixedBuffer<string>(3)
fb.put("pippo","pluto","paperino","paperoga")
var a=fb.get() // pippo
var b=fb.get() // pluto
var c=fb.get() // paperino
var d=fb.get() // undefined

console.log(a, b, c, d);