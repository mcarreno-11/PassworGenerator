// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 1. present with a series of proms 
    // a.leght of pass word * enter correct amount 
    // 
// a. promp the lenght of the password form 8 to 128  
// 5. display  written to the page 




// set this for the input of the user
const lengthInput = 6; 



//Random section 

//Random number 
let randomNum = () => {
  const numbers = [0,1,2,3,4,5,6,7,8,9];
  return numbers[Math.floor(Math.random()*numbers.length)];
};

//Random lower case 
let randomLower = ()=> {
  const lowerCase = 'abcdefghijklnopqrstuvwxyz'.split('');
  return lowerCase[Math.floor(Math.random()*lowerCase.length)];
};

//Random Upper case
let randomUpper = () => {
  const upperCase = 'abcdefghijklnopqrstuvwxyz'.toUpperCase().split('');
  return upperCase[Math.floor(Math.random()*upperCase.length)];
};

//Random special character 
let randomCharacters = () => {
  const specialCharacters = '!@#$%^&*()_-?><'.split('');
  return specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
};

//Function that generates the password 
const generatePassword = () => {
  // Password inlcudes lowercase, uppercase, symbols and numbers
  const passwordElements = [randomNum(), randomLower(), randomUpper(), randomCharacters()];
  // length selected -4, the elements that are already in the password 
  let lengthLeft = lengthInput - 4 ;
  // function that makes the rest of the password 
  const makeRestOfPassport = () => {
    let restOfPassword = [];
    // loop to add the length left of the password - will use lower case for the rest of the password 
    for ( let i = 0; i < lengthLeft; i++ ){
      restOfPassword.push(randomLower(i));
    }
    return restOfPassword;
  }
  //combine que two passwords
  passwordElements.push(makeRestOfPassport());
  // shuffle to a random order 
  const shufflePassword = passwordElements.sort((a, b) => 0.5 - Math.random());
  //convert it to a string  
  const password = shufflePassword.toString();
  // return the password
  return password;
  
   
}



    








