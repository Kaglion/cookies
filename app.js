const inputs = document.querySelectorAll('input');
const btns = document.querySelectorAll('button');
const infoTxt = document.querySelector('.info-txt');
const affichage = document.querySelector('.affichage');
const today = new Date();
const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000 );
let day = ('0' + nextWeek).slice(9,11)
let month = ('0' + (today.getMonth() + 1)).slice(-2)
let year = today.getFullYear()
document.querySelector('input[type=date]').value = `${year}-${month}-${day}`;
// console.log(month);

btns.forEach((btn) => {
    btn.addEventListener('click', btnAction);
})

function btnAction(params) {
    let nvObj = {};

    inputs.forEach(input => {
        let attrName = input.getAttribute('name');
        let attrValeur = attrName !== "cookiesExpire" ? input.value : input.valueAsDate;
        nvObj[attrName] = attrValeur;
        console.log(nvObj);
    })

    let description = params.target.getAttribute('data-cookie');

    if (description === "creer") {
        creerCookies(nvObj.cookiesName, nvObj.cookiesValue, nvObj.cookiesExpire);
    }
    else if (description === "afficher" ){
        listeCookies();
    }

    // console.log(description);
    
}

