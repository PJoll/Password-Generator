// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890  !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var minimumLength = 8;
  var maximumLength = 128;
  var passwordLength;
  var password = "";
  passwordText.value = password;
  for(var i = 0; i <= passwordLength; i++){
    var randomCharacter =Math.floor(Math.random() * characters.length);
    password += characters.substring(randomCharacter, randomCharacter +1);
  }
  document.getElementById("password").value = password;
}
    


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

