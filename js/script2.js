const body = document.querySelector('body');
const divHtml = `<div></div>`;
const btnHtml = `<button>Cliquez-moi!</button>`;
const popupHtml = `<p>Ceci est une popup.</p>`;
const closeBtnHtml = `<button>X</button>`;
body.insertAdjacentHTML('afterbegin', divHtml);

const divBouton = document.querySelector('body div');
divBouton.insertAdjacentHTML("afterbegin", btnHtml);
const btn = document.querySelector('body div button')

function onClick(btn) {
    divBouton.insertAdjacentHTML("beforeend", popupHtml + closeBtnHtml);
    divAtt = document.createAttribute('id');
    divAtt.value = 'btnDiv';
    document.querySelector('body div').setAttributeNode(divAtt);

    const popupAtt = document.createAttribute('class');
    const closeBtnAtt = document.createAttribute('class');
    popupAtt.value = "popup";
    closeBtnAtt.value = 'closeBtn';
    const closeBtn = document.querySelector('#btnDiv').lastChild;
    closeBtn.setAttributeNode(closeBtnAtt)

    const pText = document.querySelector('#btnDiv p');
    pText.setAttributeNode(popupAtt);
    pText.style.display = "flex";
    pText.style.justifyContent = "center";
    pText.style.alignItems = "center";

    function closeClick(closeBtn) {
        divBouton.removeChild(pText);
        divBouton.removeChild(closeBtn);
    }

    closeBtn.addEventListener('click', () => {
        closeClick(closeBtn)
    })
}

btn.addEventListener('click', () => {
    onClick(btn)
})
