const $inputRange = document.querySelector("#length");
const $selectedValue = document.querySelector(".selected-length");
const $generatedPassword = document.querySelector(".generated-password");
const $uppercaseCheckbox = document.querySelector("#uppercase");
const $lowercaseCheckbox = document.querySelector("#lowercase");
const $numbersCheckbox = document.querySelector("#numbers");
const $symbolsCheckbox = document.querySelector("#symbols");
const $generateButton = document.querySelector("button[type='submit']");

function generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const symbols = "&~=#{}([-|_^@])^$*%£%!§:/;.?<>²";
  const numbers = "1234567890";
  let character = "";
  let password = "";

  if (useUppercase) character += uppercaseLetters;
  if (useLowercase) character += lowercaseLetters;
  if (useNumbers) character += numbers;
  if (useSymbols) character += symbols;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * character.length);
    password += character[randomIndex];
  }

  return password;
}

$inputRange.addEventListener("input", (event) => {
  let valueChanged = event.target.value;
  $selectedValue.textContent = valueChanged;
});

$generateButton.addEventListener("click", (event) => {
  event.preventDefault();
  const length = parseInt($inputRange.value);
  const useUppercase = $uppercaseCheckbox.checked;
  const useLowercase = $lowercaseCheckbox.checked;
  const useNumbers = $numbersCheckbox.checked;
  const useSymbols = $symbolsCheckbox.checked;

  const newPassword = generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols);
  $generatedPassword.textContent = newPassword;
});