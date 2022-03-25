// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  const passwordText = document.querySelector("#password");
  //const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./\\:;<=>?@][^_`{|}~";
  let characters = "";
  let lowercaseCharachters = false;
  let uppercase = false;
  let numeric = false;
  let special = false;
  while(!lowercaseCharachters && !uppercase && !numeric && !special) {
    lowercaseCharachters = confirm("Do you want lowercase charachters?");
    uppercase =  confirm("Do you want upeprcase charachters?");
    numeric =  confirm("Do you want numeric charachters");
    special =  confirm("Do you want special charachters");
    if(!lowercaseCharachters && !uppercase && !numeric && !special) {
      alert("Must select at least one character type")
    }

  }

  if (lowercaseCharachters) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  }
  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXY"
  }if (numeric) {
    characters += "1234567890"
  }if (special) {
    characters += "!#$%&'()*+,-./\\:;<=>?@][^_`{|}~\""
  }


  const minimumLength = 8;
  const maximumLength = 128;
  let passwordLength = prompt("type the length of password") ;
  let password = "";
  passwordText.value = password;
  for(let i = 0; i <= passwordLength; i++){
    const randomCharacter =Math.floor(Math.random() * characters.length);
    password += characters.substring(randomCharacter, randomCharacter +1);
  }
  passwordText.value = password;
}
    


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

