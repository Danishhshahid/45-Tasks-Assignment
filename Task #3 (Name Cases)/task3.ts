//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let danish: string= "i am Danish";
console.log("UpperCase", danish.toUpperCase()) ;
console.log('LowerCase', danish.toLowerCase());
console.log('TitleCase', danish.replace(/\b\w/g, char => char.toUpperCase()));