class Human{
    age = 13;

    constructor(ht, wt){
        this.ht = ht;
        this.#wt = wt;
    }

    ht;
    #wt;

    walking(){
        console.log("I am walking")
    }

    running(){
        console.log("I am running")
    }
}

let obj = new Human(80, 78);

console.log(obj.age);
console.log(obj.ht);