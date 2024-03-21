"use strict";
let magicians = ['dynamo', 'harry houdiny', 'keller'];
function make_great(magicians) {
    magicians.forEach(magic => {
        console.log(`${magic}, the great magician`);
    });
}
make_great(magicians);
