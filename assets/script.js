// Assignment Code
// userInput variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Password variable values
// Special characters
// Added \ to colon,semi-colon and back-slash to be able to input them into the array
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space indicates conversion to Uppercase
space = [];
// Choices declared outside of the if statement so they can be concatenated upon conditional
var choices; 
// Converts lower case letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};
// Creates a variable for uppercase conversion
abc2 = abc.map(toUpper);

var generateBtn = document.querySelector("#generate");

// Moved addEventListener to call before the end of the functions
// Eliminated the writePassword function, as it was not necessary
// Added a function and varibale to call for the generatePassword function
// This was a situation where querySelector and querySelectorAll did not produce desired results -- chose to use getElementById for proper functinality
generateBtn.addEventListener("click", function () {
  var gp = generatePassword();
  document.getElementById("password").placeholder = gp;
});

// Start function to generate password
function generatePassword() {
  // Prompts the user to enter a numerical length to meet the password length criteria
  // parseInt allows the string to be converted into a number
  enter = parseInt(prompt("Create a password at least 8 characters in length but no more than 128"));
  // First if statement for the user to validate
  // If the criteria is not validated, the user receives the alert
  if (!enter) {
    alert("This needs to include a value");
  } else if (enter < 8 || enter > 128) {
    // validates the user input
    // Starts the user input prompts
    enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
    // the prompts for each of the criteria continue once user input is validated
    confirmNumber = confirm("Would you like this to include numbers?");
    confirmCharacter = confirm("Would you like this to include special characters?");
    confirmUppercase = confirm("Would you like this to include Uppercase letters?");
    confirmLowercase = confirm("Would you like this to include Lowercase letters?");
  };

  // Else if for 4 negative choices
  // alerts the user that they MUST choose at least one of the 4 criteria
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose at least one of the criteria!");

  }
  // This is the first if statement that uses the user input for the prompts
  // Else if for 4 positive choices
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
      // The .concat method merges the arrays togerher
      choices = character.concat(number, abc, abc2);
  }
  // Else if for 3 positive choices
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number, abc2);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(abc, abc2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(abc, abc2);
  }
  // Else if for 2 positive choices 
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(abc);

  } else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(abc2);
  }
  
  else if (confirmLowercase && confirmNumber) {
    choices = abc.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
    choices = abc.concat(abc2);

  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(abc2);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmLowercase) {
      choices = abc;
  }
  // Created the space variable to fill the uppercase conversion
  else if (confirmUppercase) {
      choices = space.concat(abc2);
  };

  // password variable is an array placeholder for the user generated amount of length
  var password = [];

  // This for loop will start the random selection of variables
  // Added Math.random function and multiplied it by the choices length to generate random variables that meet the length the user input
  for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  // Attempted to use .split(' ') for this method, however, it was not able to add the array AND convert it to a string
  var gp = password.join("");
  userInput(gp);
  return gp;
  }

// This calls for the randomly generated password to display within the text-area
// Used text.Content for security purposes rather than innerHTML
// Again, getElementById was used here as opposed to querySelector because of functionality
function userInput(gp) {
  document.getElementById("password").textContent = gp;
}

  
