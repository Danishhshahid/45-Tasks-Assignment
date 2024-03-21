"use strict";
/* Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.
*/
//Ex: 14
let guestList = ["sijawal", "saif", "usama", "younis"];
console.log("\nInivitation:\n");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello, ${guestList[i]}:\nyou are invited in today's dinner party\n`);
}
//Ex :15;
console.log(`unfortunately,${guestList[0]}, will not attend the party.`);
guestList[0] = "Danish";
console.log('\nNEW LIST OF GUESTS\n');
for (let j = 0; j < guestList.length; j++) {
    console.log(`Hello ${guestList[j]},\n You are invited to the party\n`);
}
