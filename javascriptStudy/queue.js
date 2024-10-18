class Queue{
    constructor(){
        this.a = []
    }
    front (){
        if(this.a.lenth == 0){
            console.log("큐가 비었다");
        }
        else return this.a[0];
    }
    enqueue(value){
        this.a.push(value);
    }
    dequeue(){
        if(this.a.length===0){
            console.log("큐가 비었다");
        }
        else{
            this.a.shift()
        };
    }
}

const q = new Queue();
for(let a = 1; a<10; a++){
    q.enqueue(a);
}
while(q.a.length!=0){
    console.log(q.front());
    q.dequeue();
}