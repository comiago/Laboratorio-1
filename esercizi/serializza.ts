function* serializza(o : Record<string, any>) : Generator<Array<any>>{
    let a : Array<any>;
    let sa : Array<string> = [];
    for(let i in o) sa.push(i);
    sa.sort();
    for(let i of sa){
        a = [i, o[i]];
        yield a;
    }
}

var e=serializza({zz:1, b:true, c:"hello"})
console.log(e.next());
console.log(e.next());
console.log(e.next());