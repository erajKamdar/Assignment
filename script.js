                        //STACK (LIFO ==> lastInFirstOut)
class Stack{
    constructor(){
        this.items = []
    }
    push(addElement){
        this.items.push(addElement)
        return this.items
    }
    pop(){
        if(this.items.length === 0){
            return "Underflow"}
        else{
       return this.items.pop()
        }
    }
}
let stack = new Stack();
                        //QUEUE (FIFO ==> firstInFirstOut)
class Queue{
    constructor(){
        this.itemsInqueue = []
    }
    enqueue(queElement){
        this.itemsInqueue.push(queElement)
        return this.itemsInqueue
    }
    dequeue(){
        if(this.itemsInqueue.length === 0){
            return "Underflow"
        }
        else{
            return this.itemsInqueue.shift()
        }
    }
}
let queue = new Queue();
                        //Multiply_By_Two
class Multiply{
    constructor(){
        this.total = 0
    }
    MultiplyByTwo(element){
      return this.total = element *  2
    }
}
let multiply = new Multiply()