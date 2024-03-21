"use strict";
let magicians = ["danish", "saif", "shoukat"];
function make_great(magicians) {
    let great = [];
    magicians.forEach((magic) => {
        great.push(`${magic}, the great`);
    });
    return great;
}
function show_magicians(magicians) {
    magicians.forEach((magicians) => {
        console.log(magicians);
    });
}
let great = make_great(magicians.slice());
console.log("Orginial Arry");
show_magicians(magicians);
console.log("modified arry");
show_magicians(great);
