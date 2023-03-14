const leapYears = function(nb) {
    if (nb % 4 == 0 && (nb % 100 != 0 || nb % 400 == 0))
        return true;
    else 
        return false;
};


const year = 1984;
const isLeapYear = leapYears(year);
console.log(`The year ${year} is a ${isLeapYear ? "leap year" : "normal year"}`);

// Do not edit below this line
module.exports = leapYears;
