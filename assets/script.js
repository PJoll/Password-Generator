
const generateBtn = document.querySelector("#generate");


function writePassword() {
  //Declaring Variables for password
  const passwordText = document.querySelector("#password");
  let characters = "";
  let lowercaseCharacters = false;
  let uppercase = false;
  let numeric = false;
  let special = false;
  //Creating popup boxes for all cases
  while(!lowercaseCharacters && !uppercase && !numeric && !special) {
    lowercaseCharacters = confirm("Do you want lowercase characters?");
    uppercase =  confirm("Do you want upeprcase characters?");
    numeric =  confirm("Do you want numeric characters");
    special =  confirm("Do you want special characters");
    // Situation where nothing is chosen
    if(!lowercaseCharacters && !uppercase && !numeric && !special) {
      alert("Must select at least one character type")
    }

  }
// Declaring All characters
  if (lowercaseCharacters) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  }
  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXY"
  }if (numeric) {
    characters += "1234567890"
  }if (special) {
    characters += "!#$%&'()*+,-./\\:;<=>?@][^_`{|}~\""
  }

// Setting the length of the password
  const minimumLength = 8;
  const maximumLength = 128;
  let passwordLength = 0;
  while(isNaN(+passwordLength)|| passwordLength<minimumLength || passwordLength>maximumLength){
     passwordLength = prompt("type the length of password");
    if (isNaN(+passwordLength)|| passwordLength<minimumLength || passwordLength>maximumLength){
      alert("Must be a number with length 8-128");
    }
  }
  // Creating the math for the password
  let password = "";
  passwordText.value = password;
  for(let i = 0; i <= passwordLength; i++){
    const randomCharacter =Math.floor(Math.random() * characters.length);
    password += characters.substring(randomCharacter, randomCharacter +1);
  }
  passwordText.value = password;
}
    
generateBtn.addEventListener("click", writePassword);

