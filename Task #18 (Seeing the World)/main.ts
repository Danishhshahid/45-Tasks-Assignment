let places: string[] = ["kashmir", "naran", "hunza", "quetta"];

console.log("Original orders:", places);
console.log("alphabatical order:", [...places].sort());

console.log("original order:", places);
console.log("reverse alphabatical order:", [...places].sort().reverse());

console.log("original order:", places);
places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("original order:", places);

places.sort();
console.log("alphabatical order:", places);

places.reverse();
console.log("reverse alphabatical order:", places);
