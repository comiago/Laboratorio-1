// interface Nodo{
//     value : number;
//     next ?: Nodo;
//     previous ?: Nodo;
// }

// class Queue{
//     head: Nodo | undefined;
//     tail: Nodo | undefined;
//     dimension: number;

//     constructor(){
//         this.head = undefined;
//         this.tail = undefined;
//         this.dimension = 0;
//     }

//     enqueue(v: number) : void {
//         let newNode: Nodo = {value: v, previous: undefined};
//         if(this.head == undefined){
//             newNode.next = undefined;
//             this.head = newNode;
//             this.tail = newNode;
//         } else{
//             newNode.next = this.head;
//             this.head.previous = newNode;
//         }
//         this.head = newNode;
//         this.dimension++;
//     }
// }

interface Nodo<T>{
    value : T;
    next ?: Nodo<T>;
    previous ?: Nodo<T>;
}

class Queue<T>{
    head ?: Nodo<T>;
    tail ?: Nodo<T>;
    dimension : number;

    constructor(){
        this.head = undefined;
        this.tail = undefined;
        this.dimension = 0;
    }

    enqueue(v: T) : void {
        let newNode: Nodo<T> = {value: v, previous: undefined};
        if(this.head == undefined){
            newNode.next = undefined;
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head.previous = newNode;
        }
        this.head = newNode;
        this.dimension++;
    }

    dequeue() : void {
        if(!this.head){
            console.log("Empty queue");
            return;
        }
        if(this.head.next){
            this.head = this.head.next;
            this.head.previous = undefined;
        }
    }

    print(node = this.head) : void {
        if(!node){
            console.log("Empty queue");
            return;
        }
        let pippo: Nodo<T> = node;
        if(!pippo.next){
            console.log(pippo.value);
            return;
        }
        console.log(pippo.value);
        this.print(pippo.next);
    }
}

let q = new Queue<number>();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.print();
q.dequeue();
q.dequeue();
q.print();