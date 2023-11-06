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

    var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128."),
        charType = prompt("Enter a character type: special, numeric, uppercase, lowercase"),

    )

     var charSets = {
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numeric: "0123456789",
        special: "!/=-,.'*&#"
     }

     var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
     var pass = '';

    // return confirm("Include Lowercase Letters?");
    // return confirm("Include Upercase Letters?");
    // return confirm("Include Numbers?");
    // return confirm("Include Special Characters?");
    // return alert("Your Password is :");

    // From Geeks for Geeks How to Generate a Random Password Using JavaScript? and Random Password Generator with Prompts from StackOverflow
    for (var i = 0; i < length; i++) {
         pass += charSet.charAt(Math.floor(Math.random() * charSet.length));
     }
     console.log(pass);
    return pass;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
