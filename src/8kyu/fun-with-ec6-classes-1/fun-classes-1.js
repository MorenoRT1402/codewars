class Person{
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male'){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    sayFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    static greetExtraTerrestrials(raceName){
        return `Welcome to Planet Earth ${raceName}`
    }
}

//#----------------------------------#

console.log(new Person());
const jane = new Person('Jane', undefined, 25, 'Female');
console.log(jane);
console.log(jane.sayFullName());
