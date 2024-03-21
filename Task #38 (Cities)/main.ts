
//Default parameters
function cities(Cities: string, Country: string = "pakistan") {
    return `${Cities}, is in ${Country}`;
  }
  console.log(cities("karachi"));
  console.log(cities("Islamabad"));
  console.log(cities("Larkana", "Sindh"));
  console.log(cities("New york", "usa"));
  