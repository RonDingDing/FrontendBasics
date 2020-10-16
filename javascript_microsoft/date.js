// get right now
const now = new Date();
console.log(now);

console.log(now.getMonth());
console.log(now.getTime());
console.log(now.getDay());
// set a specific date and time
// month counting starts with zero
// Date 以当前时区计算，得出结果是UTC
const randomDate = new Date(2015, 3, 12, 8, 25, 58);
console.log(randomDate);

// set a specific date - time set to midnight
const win95Launch = new Date(1995, 7, 24);
console.log(win95Launch);

const now2 = new Date();
now2.setFullYear(2014);
now2.setMonth(3);
now2.setDate(4);
now2.setHours(4);
now2.setMinutes(24);
now2.setSeconds(46);

console.log(now2);

const demoDate = new Date();
demoDate.setMonth(0);
console.log(demoDate);

console.log(`Day of week: ${demoDate.getDay()}`);
console.log(`Date of week: ${demoDate.getDate()}`);