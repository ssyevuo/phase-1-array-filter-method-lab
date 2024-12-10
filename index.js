// Code your solution here

let drivers  = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, string) {
    
    const lowerCaseString = string.toLowerCase();

    return drivers.filter(driver => driver.toLowerCase() === lowerCaseString);
}

console.log(findMatching(drivers, 'sammy'));

function fuzzyMatch(drivers, string) {

    const lowerCaseString = string.toLowerCase();

    return drivers.filter(driver => driver.toLowerCase().startsWith(lowerCaseString));
}

console.log(fuzzyMatch(drivers, 'a'));

function matchName(driver, string) {
      let drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

      return drivers.filter(driver => driver.name === string);

}

console.log(matchName(drivers, 'Bobby'));