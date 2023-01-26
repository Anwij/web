let btn = document.querySelector("#btn-search");
let randBtn = document.querySelector("#random-search")
let input = document.querySelector("#digit");
let preloaderEl = document.getElementById('preloader');

btn.addEventListener("click", () => {
    let txt = input.value.trim();
    if (txt === "") {
        alert("Введите число");
    } else {
        txt = txt + "/trivia?json";
        preloaderEl.classList.remove('hidden');
        preloaderEl.classList.add('visible');
        loadData(txt);
    }
});

randBtn.addEventListener("click", () => {
    let txt = 'random/trivia?json';
        preloaderEl.classList.remove('hidden');
        preloaderEl.classList.add('visible');
        loadData(txt);
});


async function loadData(digit) {
    let correct_url = "http://numbersapi.com/" + digit;

    let response = await fetch(correct_url)


    if (response.ok) {
        response = await response.json();
        console.log(response['text']);
        document.getElementById("fact").innerHTML = response['text'];
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');
    } else {
        alert("Ошибка HTTP: " + response.status);
    }


}