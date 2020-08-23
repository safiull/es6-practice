// javascript a method er jonno kono function keyword use kora lage nah..

class Parent {
    constructor() {
        this.fathersName = "Amir Khashru.";
    }
}

class Child extends Parent{
    constructor(name, age){
        // extend korle ey super function ta child class a likhe dite hobe.
        super();
        this.name = name;
        this.age = age;
    }

    getFullName(){
        return this.fathersName + " Baba";
    }
}

const child = new Child("Karim Ullah", 30);
console.log(child.getFullName());