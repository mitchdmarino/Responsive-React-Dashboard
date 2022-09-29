// helper function to convert the balance (stored in cents) to a readable dollars and cents value (i.e. 2000 c => $20.00)

export function centsToDollar(cents) {
  let dollars = Math.floor(cents / 100);
  let change = cents % 100;
  if (change < 10) {
    change = `0${change}`;
  }
  return `$${dollars}.${change}`;
}

// console.log(centsToDollar(43090));
// console.log(centsToDollar(20001));
