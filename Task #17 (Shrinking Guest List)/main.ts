//Shrinking the list:
let Guest: string[] = ["Danish", "sijawal", "saif", "shoukat", "Younis"];

console.log(`I can't Invite people more than 2`);
while (Guest.length > 2) {
  let removedGuest = Guest.pop();
  console.log(`Sorry, ${removedGuest}, I can't  invite you to the dinner`);
}
Guest.forEach((Guest) => {
  console.log(`Hello dear ${Guest}, You are still invited`);
});
Guest.splice(0, Guest.length);
console.log(Guest);
