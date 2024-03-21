"use strict";
let users = ["user3", "user2", "user1", "user2"];
let newUsers = ["user1", "admin"];
newUsers.forEach((newUsers) => {
    if (users.some((users) => users.toLowerCase() === newUsers.toLowerCase())) {
        console.log(`${newUsers}, username is already created`);
    }
    else {
        console.log("userName available");
    }
});
