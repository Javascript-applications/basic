// const date = new Date("March 29, 2023 12:50:20 ");
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getTime());
// console.log(date.getHours());

// const date1 = new Date("August 19, 1975 23:15:30 GMT+07:00");
// const date2 = new Date("August 19, 1975 23:15:30 GMT-02:00");

// console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());

const today = new Date();
const dayOfMonth = today.getUTCDay();

console.log("today", today);
console.log("dayOfMonth", dayOfMonth);
