let val;

const today = new Date(); // Date Object

// let birthday = new Date("9-10-1986 11:25:30");
// birthday = new Date("September 10 1955");
birthday = new Date("9/03/1999 01:25:30");

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(2);
birthday.setFullYear(2);
birthday.setHours(birthday.getHours() + 3);
// birthday.setMinutes(45);
// birthday.setSeconds(49);

console.log(birthday);
