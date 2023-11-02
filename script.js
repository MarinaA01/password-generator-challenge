// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Function started by TA Gerard Mennella
function generatePassword() {
    
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
