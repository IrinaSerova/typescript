
class Person {
    
    private firstName: string;
    private lastName: string;
    private age: number;
    private isAlive: true;
    constructor(theFirstName: string, theLastName: string, theAge: number, theIsAlive: true){
        this.firstName = theFirstName;
        this.lastName = theLastName;
        this.age = theAge;
        this.isAlive = theIsAlive;
    }
    
}

let developerOfTypescript = new Person("Anders", "Hejlsberg", 57, true);
console.log(developerOfTypescript);
