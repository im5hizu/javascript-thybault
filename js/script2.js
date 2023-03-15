const body = document.querySelector('body');
const divHtml = `<div></div>`;
const btnHtml = `<button>Cliquez-moi!</button>`;
const popupHtml = `<div class="popup"><p>Ceci est une popup.</p><button class="closeBtn">X</button></div>`;

body.insertAdjacentHTML('afterbegin', divHtml);

const div = document.querySelector('body div');
div.insertAdjacentHTML("afterbegin", btnHtml);
const btn = document.querySelector('body div button')

function onClick() {
  div.insertAdjacentHTML("beforeend", popupHtml);

  const popup = document.querySelector('.popup');
  popup.style.display = "flex";
  popup.style.justifyContent = "center";
  popup.style.alignItems = "center";

  const closeBtn = document.querySelector('.closeBtn');

  closeBtn.addEventListener('click', () => {
    div.removeChild(popup);
  })
}

btn.addEventListener('click', () => {
  onClick()
})
