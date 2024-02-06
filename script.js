var generateBtn = document.querySelector("#generate");   
                                                     

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.textContent = password;
}

function generatePassword () {
  var lwrcase = "abcdefghijklmnopqrstuvwxyz";
  var uprcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nbrs = "0123456789"
  var spec = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  var passwordCharacters = "";
  
  var lwrcasePref = confirm ("Do you want lowercase in your password")
  var uprcasePref = confirm ("Do you want uppercase in your password")
  var nbrsPref = confirm ("Do you want numbers in your password")
  var specPref = confirm ("Do you want special characters in your password")
  
  var passwordLength = prompt ("How long do you want the password to be?")
  if (passwordLength < 8) {
    alert("password length is not long enough");
    return ("")
  }

  
generateBtn.addEventListener("click", writePassword);


alert ("you must selct at least one of the type for your password")

function getPasswordLength() {
var passwordLenght = prompt ("How long do you want the password to be?")
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 8;
var password = "";
var passwordCharacters = "";
}

if (number in passwordLenght (= < 8) {
  then (alert) ="password lenght is not long enough";

if (number in passwordLenght = > 120) {
  then (alert) ="password lenght is too long";
    }
  
if (lowercasePref) {
  passwordCharacters += lwrcase;
}

if (uppercasePref) {
  passwordCharacters += uprcase;
}

if (numbersPref) {
  passwordCharacters += nbrs;
}

if (specialPref) {
  passwordCharacters += spec;
}

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }

 document.getElementById("password").value = password;
 }

 function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}
 
 var password=document.getElementById("password");

console.log(password)
}

