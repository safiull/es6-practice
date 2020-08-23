// js a constructor er age function likha lage nah.
// kono parameter use korar jonno this.(property name) use kora lage.

class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const student1 = new Student("Karim Ullah", 30);
console.log(student1);
console.log(student1.name);
console.log(student1.age);