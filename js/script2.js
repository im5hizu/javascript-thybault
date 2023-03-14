const btn = document.querySelector('#btn button');
function onClick(btn){;
    const popupHtml = `<p>Ceci est une popup.</p>`;
    const closeBtnHtml = `<button>X</button>`;
    const header = document.querySelector('header');
    const divBouton = document.querySelector('#btn');
    const divBtn = header.firstElementChild;
    divBouton.insertAdjacentHTML("beforeend", popupHtml + closeBtnHtml);
    const popupAtt = document.createAttribute('class');
    const closeBtnAtt = document.createAttribute('class');
    closeBtnAtt.value = 'closeBtn';
    const pText = document.querySelector('#btn p');
    const closeBtnLast = divBtn.lastElementChild;
    closeBtnLast.setAttributeNode(closeBtnAtt);
    popupAtt.value = "popup";
    pText.setAttributeNode(popupAtt);
    pText.style.display = "flex";
    pText.style.justifyContent = "center";
    pText.style.alignItems = "center";
    function closeClick(closeBtnLast){
        divBouton.removeChild(pText);
        divBouton.removeChild(divBouton.lastElementChild);
    }
    closeBtnLast.addEventListener('click', () => {
      closeClick()  
    })
}

btn.addEventListener('click', () =>{
    onClick()
})
