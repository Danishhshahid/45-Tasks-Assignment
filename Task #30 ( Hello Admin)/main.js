"use strict";
//Hello admin:
let users = ["admin", "Danish", "Saif", "Sijawal"];
users.forEach((users) => {
    if (users === "admin") {
        console.log("hello Admin, Would you like to see the report");
    }
    else {
        console.log(`Hello ${users}, thank you logging in`);
    }
});
