/* More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/

//Ex :15;
let guestList : string[]= ["sijawal","usama","younis"]
console.log(`\nunfortunately,${guestList[0]}, will not attend the party.\n`);
guestList[0]="Danish";

console.log('\nNEW LIST OF GUESTS\n');
for(let j=0; j < guestList.length; j++ ){
    console.log(`Hello ${guestList[j]},\n You are invited to the party\n`);
}

//Ex :16;
console.log("\nhey. i found a bigger dinner table, so, our new guest list is:\n");
guestList.unshift("Shoaib");
guestList.splice(2,0,"Mehran");
guestList.push("saqib");

for(let y = 0; y < guestList.length; y++){
    console.log(`\nHello Dear, ${guestList[y]},\n You are invited to the party tonight.\n`);
}











