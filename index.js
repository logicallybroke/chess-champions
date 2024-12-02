let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 1886;

function increment() {
    count += 1
    countEl.textContent = count
    save();
}
function yearfun() {
    // event.preventDefault(); // Prevent form submission
    count = Number(document.getElementById("year").value);
    if (count === 0) count = 1886;
    countEl.textContent = count;
    save();
}

function save() {
    let str = "";
    let myImg = document.getElementById('champ-img');
    if (count >= 1886 && count < 1894) {
        str = "Wilhelm Steinitz";
        myImg.src = "./images/steinitz.webp";
    } else if (count >= 1894 && count < 1921) {
        str = "Emanuel Lasker";
        myImg.src = "./images/lasker.webp";
    } else if (count >= 1921 && count < 1927) {
        str = "José Raúl Capablanca";
        myImg.src = "./images/capa.webp";
    } else if (count >= 1927 && count < 1935) {
        str = "Alexander Alekhine";
        myImg.src = "./images/alekhine.jpg";
    } else if (count >= 1935 && count < 1937) {
        str = "Max Euwe";
        myImg.src = "./images/euwe.jpg";
    } else if (count >= 1937 && count < 1946) {
        str = "Alexander Alekhine";
        myImg.src = "./images/alekhine.jpg";
    } else if (count >= 1948 && count < 1957) {
        str = "Mikhail Botvinnik";
        myImg.src = "./images/botvinnik.jpg";
    } else if (count >= 1957 && count < 1958) {
        str = "Vasily Smyslov";
        myImg.src = "./images/smyslov.jpg";
    } else if (count >= 1958 && count < 1960) {
        str = "Mikhail Botvinnik";
        myImg.src = "./images/botvinnik.jpg";
    } else if (count >= 1960 && count < 1961) {
        str = "Mikhail Tal";
        myImg.src = "./images/tal.jpg";
    } else if (count >= 1961 && count < 1963) {
        str = "Mikhail Botvinnik";
        myImg.src = "./images/botvinnik.jpg";
    } else if (count >= 1963 && count < 1969) {
        str = "Tigran Petrosian";
        myImg.src = "./images/petro.jpg";
    } else if (count >= 1969 && count < 1972) {
        str = "Boris Spassky";
        myImg.src = "./images/spassky.jpg";
    } else if (count >= 1972 && count < 1975) {
        str = "Bobby Fischer";
        myImg.src = "./images/fischer.webp";
    } else if (count >= 1975 && count < 1985) {
        str = "Anatoly Karpov";
        myImg.src = "./images/karpov.jpg";
    } else if (count >= 1985 && count < 2000) {
        str = "Garry Kasparov";
        myImg.src = "./images/kasparov.jpg";
    } else if (count >= 2000 && count < 2007) {
        str = "Vladimir Kramnik";
        myImg.src = "./images/kramnik.jpg";
    } else if (count >= 2007 && count < 2013) {
        str = "Viswanathan Anand";
        myImg.src = "./images/anand.jpg";
    } else if (count >= 2013 && count < 2023) {
        str = "Magnus Carlsen";
        myImg.src = "./images/magnus.jpg";
    } else if (count >= 2023 && count < 2025) {
        str = "Ding Liren"
        myImg.src = "./images/ding.jpg";
    } else {
        str = "DATA UNAVAILABLE";
        myImg.src = "sad.jpg";
    }
    saveEl.textContent = str;

}


function reset() {
    count = 1886;
    countEl.innerText = count;
    saveEl.innerText = "Our champ champ:";
    let myImg = document.getElementById('champ-img'); // Define myImg within the function
    myImg.src = "./images/chess.avif";
    
}


const yearInput = document.getElementById('year');
const button = document.getElementById('year-btn');

yearInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
});