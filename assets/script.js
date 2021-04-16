// Assignment Code
var cardBody = document.querySelector(".card-body");
var cardFooter = document.querySelector(".card-footer");
var passwordText = cardBody.querySelector("#password");
var generateBtn = cardFooter.querySelector("#generate");
var index = 0;

var passwordOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!*&#$%";

var characters = passwordOptions.split(' ');

// Write password to the #password input
function writePassword() {
  // var password = generatePassword(),
    var password = prompt("Create a password at least 8 characters in length but no more than 128:");
    }
    var index = Math.floor(Math.random() * characters.length);
    var computerChoice = characters[index];
    

    // window.alert("The computer chose " + computerChoice);

  //   var passwordLengthCheck = checkIfPasswordIsAtLeast8(promptUser)
  // }

  // function checkIfPasswordIsAtLeast8(password){
  //   if(passwordLengthCheck >= 8) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
