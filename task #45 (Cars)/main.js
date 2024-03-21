"use strict";
function car_making(manufacturer, Model, ...options) {
    let car = { manufacturer, Model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(car_making("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(car_making("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
