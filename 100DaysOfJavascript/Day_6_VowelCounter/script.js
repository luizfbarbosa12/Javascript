const word = document.querySelector("#user-input");
const check = document.querySelector("#check");
const result = document.querySelector("#result");

check.addEventListener("click", () => {
  const arrayOfLetters = word.value.toLowerCase().split("");
  let arrayOfVowels = [];

  const filteredVowels = arrayOfLetters.filter((letter) => {
    if (/[aeiou]/.test(letter)) {
      arrayOfVowels.push(letter);
    }
  });
  result.innerHTML = `Your word has ${arrayOfVowels.length} vowels`;
});
