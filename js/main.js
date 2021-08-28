let text = document.querySelector("pre");
let newText = text.textContent;

//Первое задание
//const regexp1=/'/g;
//text.innerHTML=newText.replace(regexp1,'"');

//Второе задание
const regexp2 = /^'|(\s)'|'(\s)|'$/g;
text.innerHTML = newText.replace(regexp2, '$1"$2');

//Третье задание
const regexp3 = /^[A-Za-zА-Яа-яЁё]+$/u;
const regexp4 = /\+\d\(\d{3}\)\d{3}-\d{4}/;
const regexp5 = /^([a-z]+[.,-]?[a-z]+)@([a-z]+)\.([a-z]{2})$/;


const btn = document.querySelector("#btn");
const name = document.querySelector("#first-name");
const tel = document.querySelector("#tel");
const mail = document.querySelector("#mail");


btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (!name.value || regexp3.test(name.value) !== true) {
        setStyles(name);
    }
    if (!tel.value || regexp4.test(tel.value) !== true) {
        setStyles(tel);
    }
    if (!mail.value || regexp5.test(mail.value) !== true) {
        setStyles(mail);
    }

});
function setStyles(item){
    item.style.border = "2px solid red";
    item.nextElementSibling.style.display = "block";
    setTimeout(function () {
        item.style.border = "1px solid black";
        item.nextElementSibling.style.display = "none";
    }, 1000);
    item.value = null;
}







