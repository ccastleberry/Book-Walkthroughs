const currency = require('./currency');

console.log('50 Canadian dollars is equal to this amount in US dollars.');
console.log(currency.canadianToUs(50));
console.log('50 US dollars is equal to this amount in Canadian dollars.');
console.log(currency.usToCanadian(50));