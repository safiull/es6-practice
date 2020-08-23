//spread operator
//module 23 video 6.

// ... dots ta moluto 1ta array hishabe accept kore.

const business = [12,34];
const sochib = [4,2];

const attached = business.concat(sochib);
//console.log(attached)


// ...attached
const maxValue = Math.max(...attached);
console.log(maxValue);