let btn = document.querySelector("#btn-search");
let randBtn = document.querySelector("#random-search")
let input = document.querySelector("#digit");
let preloaderEl = document.getElementById('preloader');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5825e0ec46msh81adbfd514af798p1289dfjsn5801683d8eca',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
};

btn.addEventListener("click", () => {
    let txt = input.value.trim();
    if (txt === "") {
        alert("Введите число");
    } else {
        txt = txt + "/trivia?fragment=true&notfound=floor&json=true";
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
    let correct_url = "https://numbersapi.p.rapidapi.com/" + digit;

    let response = await fetch(correct_url, options)


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