const reverseString = str =>
  str
    .toLowerCase()
    .split("") //Split string into an array
    .reverse("") //Reverse using array function
    .join(""); //Join all elements and return a string

module.exports = reverseString;
