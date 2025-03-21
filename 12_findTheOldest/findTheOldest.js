
const findTheOldest = function(people) {
   const oldest = people.reduce((oldestPerson, currentPerson) => {
    const oldestAge = (oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth;
    const currentAge = (currentPerson.yearOfDeath || new Date().getFullYear()) - currentPerson.yearOfBirth;
    return currentAge > oldestAge ? currentPerson : oldestPerson;
    }, people[0]);
    return oldest;
}
// Do not edit below this line
module.exports = findTheOldest;
