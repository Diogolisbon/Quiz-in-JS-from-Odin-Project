
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  const getAge = function(birth, death) {
    if (!death) {
   death = new Date().getFullYear(); // return current year using Date()
   }
   return death - birth; // else just return age using death minus birth
  }

const findTheOldest = function(array) { 
// Use reduce method to reduce the array by comparing current age with previous age
  return array.reduce((oldest, currentPerson) => {
    // oldestAge gets the age of the oldest person's year of death and birth
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

    // currentAge gets the age of the current person's year of death and birth
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

    // return name if current age is older than the oldest age, else return current oldest age
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};


console.log(findTheOldest(people).name); // Ray


