const $inputRange = document.querySelector("#length");
const $selectedValue = document.querySelector(".selected-length");

console.log($inputRange);
console.log($selectedValue);

// Generation du mot de passe
// 1. 10 lettres en majuscule aléatoire
// 2. nb (10, 2, 4, 20) dynamique de lettres en majuscule alétatoire

const $uppercaseLetters = document.querySelector("#uppercase");
const $generatedPassword = document.querySelector(".generated-password");

console.log($uppercaseLetters);

function generatePassword(length) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const symbols = "&~=#{}([-|_^@])^$*%£%!§:/;.?<>²";
  const numbers = "1234567890";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomPassword = Math.floor(Math.random() * 3);

    let newPassword = 0;

    if (randomPassword === 0) {
      const randomLettersNumber = Math.floor(Math.random() * letters.length);
      newPassword = letters[randomLettersNumber];
    } else if (randomPassword === 1) {
      const randomSymbolsNumber = Math.floor(Math.random() * symbols.length);
      newPassword = symbols[randomSymbolsNumber];
    } else {
      const randomIndexNumbers = Math.floor(Math.random() * numbers.length);
      newPassword = numbers[randomIndexNumbers];
    }

    result += newPassword
  }

  console.log(result);
  console.log(result.length);
}

console.log(generatePassword());

$inputRange.addEventListener("input", (event) => {
  let valueChanged = event.target.value;
  console.log(valueChanged);

  $selectedValue.textContent = valueChanged;
});
