// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  return "password";
}
// Add event listener to generate button

{
generateBtn.addEventListener("click", writePassword);

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var lowercasePref = confirm ("Do you want lowercase in your password")
var lowercasePref = confirm ("Do you want uppercase in your password")
var lowercasePref = confirm ("Do you want namubers in your password")
var lowercasePref = confirm ("Do you want special characters in your password")

alert ("you must selct at least one of the type for your password")

var passwordLenght = prompt ("How long do you want the password to be?")

function passwordLenght()
}
 if (number in passwordLenght = < 8) {
  then (alert) ="password lenght is not long enough";

if (number in passwordLenght = > 120) {
  then (alert) ="password lenght is too long";
    }
 
    var passwordCharacters = "";

    if (lowercasePref) {
      passwordCharacters += lowercase;










      
    }

