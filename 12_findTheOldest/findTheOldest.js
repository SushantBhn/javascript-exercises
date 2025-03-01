const findTheOldest = function(people) {
    //Find the age(current age or years lived, if dead) for each person
    people.forEach((person) => {
        if(person.yearOfDeath === undefined) {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            age = currentYear - person.yearOfBirth;
            person.age = age;
        } else {
        age = person.yearOfDeath - person.yearOfBirth;
        person.age = age;
        }
    });
    let oldestPerson = {
        name: "",
        age: people[0].age
    };

    //Find the oldest person
    people.forEach((person) => {
        if(person.age >= oldestPerson.age) {
            oldestPerson.name = person.name;
            oldestPerson.age = person.age;
        }
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
