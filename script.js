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

if (passwordLength > 120) {
  alert ("password length is too long");
  return ("")
}
  
if (lwrcasePref) {
  passwordCharacters += lwrcase;
}

if (uprcasePref) {
  passwordCharacters += uprcase;
}

if (nbrsPref) {
  passwordCharacters += nbrs;
}

if (specPref) {
  passwordCharacters += spec;
}

if (passwordCharacters === "")
  {
    alert ("you must select at least one of the type for your password")
    return ("")
  }

  var password = "";

for (var i = 0; i < passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * passwordCharacters.length);
  password += passwordCharacters.substring(randomNumber, randomNumber +1);
 }
return (password)
 }

 generateBtn.addEventListener("click", writePassword)

