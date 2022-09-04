const now = new Date(Date.now());
console.log('The current time is');
console.log(now.toDateString());

const today = new Date();
const birthday = new Date('February 18, 1996 03:24:00');
const birthday = new Date('1996-02-18T03:24:00'); // ISO
const birthday = new Date(1996, 02, 18); // month is 0 indexed
const birthday = new Date(1996, 02, 18, 03, 24, 0);
const birthday = new Date(628021800000); // passing each timetsamp

console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());

now.setFullYear(2022);
console.log(now.getFullYear());

now.setDate(10);
console.log(now.getDay());

let newDate = new Date();
setTimeout(() => {
    newDate - Date.now();
    console.log(newDate - now)
}, 1000);