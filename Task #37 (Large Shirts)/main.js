"use strict";
//Default parameters in function
function make_shirts(Siza, Message = "hello") {
    return Siza + " " + Message;
}
console.log(make_shirts("medium"));
console.log(make_shirts("medium", "i am danish"));
