class Nodo<T> {
    value: T;
    next: Nodo<T> | undefined;
    prev: Nodo<T> | undefined;

    constructor(value: T){
        this.value = value;
        this.next = undefined;
        this.prev = undefined;
    }
}

class DrunkenList<T>{
    head ?: Nodo<T>;
    tail ?: Nodo<T>;
    length : number;

    constructor(){
        this.head;
        this.tail;
        this.length = 0;
    }

    push(el : T) : void{
        let newNode : Nodo<T> = new Nodo<T>(el);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head!.prev = newNode;
            this.head = newNode;
            if(this.length % 2 != 0){
                let copy : Nodo<T> = new Nodo<T>(el);
                this.tail!.next = copy;
                copy.prev = this.tail;
                this.tail = copy;
                this.length++;
            }
        }
        this.length++;
    }

    pop() : T | undefined{
        if(this.length == 0) throw new ReferenceError;
        let el : T | undefined;
        if(this.length % 2 == 0){
            el = this.head!.value;
            this.head = this.head!.next;
            delete this.head!.prev;
        } else{
            el = this.tail?.value;
            this.tail = this.tail!.prev;
            delete this.tail!.next;
        }
        this.length--;
        return el;
    }

    asArray() : Array<T>{
        let arr : Array<T> = [];
        let curr : Nodo<T> | undefined = this.head;
        for(let i = 0; i < this.length; i++){
            if(curr){
                arr.push(curr.value);
                curr = curr.next;
            }
        }
        return arr;
    }
}

let list = new DrunkenList<number>();
list.push(1);
list.push(2);
console.log(list.pop());
list.push(3);
list.push(4);
console.log(list.asArray());