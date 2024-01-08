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

    var length = parseInt(prompt("How many characters will your password be? Enter a number between 8 and 128."))

    while (isNaN(length) || length < 8 || length > 128) {
        length = parseInt(prompt('Invalid input. Enter a valid password length.'));
    }

    var lowercase = confirm("Include lowercase characters?");
    var uppercase = confirm("Include uppercase characters?");
    var special = confirm("Include special characters?");
    var numeric = confirm("Include numeric characters?");

    // Assisted by BCS Xpert 
    // Character pool code to include or exclude characters

    var characterPool = "";

    if (lowercase) {
        characterPool += "abcdefghijklmnopqrstuvwxyz";
    }

    if (uppercase) {
        characterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (special) {
        characterPool += "!@#$%^&*()";
    }

    if (numeric) {
        characterPool += "0123456789"
    }

    var password = "";

    // For loop to generate password length
    // Code from GeeksForGeeks and Xpert Learning Assistant

    for (var i = 0; i < length; i++) {
        var pass = Math.floor(Math.random() * characterPool.length);
        password += characterPool[pass];
    }

    return password;
}
// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);
