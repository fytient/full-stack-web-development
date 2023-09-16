const path = require('path');

const people = `
Name           |  NEUID   | Email                     | Slack handle           | github username
Fang-Ying Tien  | 002784869      | tien.f@northeastern.edu | @Fang-Ying Tien (She/Her) | fytient

`.split('\n') // convert to array of lines
.filter( line => !!line.replace(/\s/g,'' )); // Remove empty lines

if (require.main === module) {
  // Run if we are being run directly

  // List the people
  for ( person of people ) {
    console.log(person);
  }
}
// If not being run directly, return the text
module.exports = people;
