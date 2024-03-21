"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList = ["sijawal", "saif", "usama", "younis"];
console.log("GuestList:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]}`);
}
console.log("\nInivitation:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello, ${guestList[i]}:\nyou are invited in today's dinner party`);
}
