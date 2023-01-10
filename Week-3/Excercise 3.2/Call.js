// call is similar to bind.
// But instead of returning a function it just calls the function with object reference for this  and arguments if any
function greetings(name) {
  let reply = ["Hello", name, this.greetingWord, this.greetingPlace].join(" ");
  console.log(reply);
}

const obj = { greetingWord: "Welcome", greetingPlace: "Home" };

// here we are calling greetings with obj as the fist parameter for refernce and Hakim for name argument
greetings.call(obj, "Hakim");
