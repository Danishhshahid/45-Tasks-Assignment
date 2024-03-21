//Default parameters in function

function make_shirts(Siza: string, Message: string = "hello") {
    return Siza + " " + Message;
  }
  console.log(make_shirts("medium"));
  console.log(make_shirts("medium", "i am danish"));
  