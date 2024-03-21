"use strict";
//Default parameters
function cities(Cities, Country = "pakistan") {
    return `${Cities}, is in ${Country}`;
}
console.log(cities("karachi"));
console.log(cities("Islamabad"));
console.log(cities("Larkana", "Sindh"));
console.log(cities("New york", "usa"));
