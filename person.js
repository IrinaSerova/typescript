var Person = /** @class */ (function () {
    function Person(theFirstName, theLastName, theAge, theIsAlive) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
        this.age = theAge;
        this.isAlive = theIsAlive;
    }
    return Person;
}());
var developerOfTypescript = new Person("Anders", "Hejlsberg", 57, true);
console.log(developerOfTypescript);
