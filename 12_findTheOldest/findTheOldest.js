const findTheOldest = function(people) {
    let oldestAge = -1;
    let oldestPerson;
    people.forEach(person => {
        let death = person.yearOfDeath? person.yearOfDeath : 2024;
        let age = death - person.yearOfBirth;
        console.log(person.name, age);
        if (age > oldestAge) {
            oldestPerson = person;
            oldestAge = age;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
