const inputValue = document.querySelector("#input");
const copy = document.querySelector(".btn");

const copyText = (event) => {
  event.preventDefault();

  inputValue.select();
  inputValue.setSelectionRange(0, -1);
  navigator.clipboard.writeText(inputValue.value).then(() => {
    console.log(inputValue.value);
  });

  copy.innerHTML = "Copied!";

  setTimeout(() => {
    copy.innerHTML = "Copy!";
  }, 3000);
};

copy.addEventListener("click", copyText);
