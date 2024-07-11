const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    const lowercaseName = name.toLowerCase();
    return drivers.filter((driver) => {
        const lowercaseDriverName = driver.toLowerCase();
        return lowercaseDriverName.includes(lowercaseName);
    });
}

function fuzzyMatch(drivers, name){
    const lowercaseName = name.toLowerCase();
    return drivers.filter((driver) => {
        const lowercaseDriverName = driver.toLowerCase();
        return lowercaseDriverName.startsWith(lowercaseName);
    });
}
// console.log(findMatching(drivers, 'Sa'))
// console.log(findMatching(drivers, 'y'))
// console.log(findMatching(drivers, 'mm'))

const _drivers = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  console.log(matchName(_drivers, 'Bobby')); 
  