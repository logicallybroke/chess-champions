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
    count = document.getElementById("year").value;
    countEl.textContent = count;
    save();
}

function save() {
    let str = "";
    let myImg = document.getElementById('champ-img');
    if (count >= 1886 && count < 1894) {
        str = "Wilhelm Steinitz";
        myImg.src = "steinitz.webp";
    } else if (count >= 1894 && count < 1921) {
        str = "Emanuel Lasker";
        myImg.src = "lasker.webp";
    } else if (count >= 1921 && count < 1927) {
        str = "José Raúl Capablanca";
        myImg.src = "capa.webp";
    } else if (count >= 1927 && count < 1935) {
        str = "Alexander Alekhine";
        myImg.src = "alekhine.jpg";
    } else if (count >= 1935 && count < 1937) {
        str = "Max Euwe";
        myImg.src = "euwe.jpg";
    } else if (count >= 1937 && count < 1946) {
        str = "Alexander Alekhine";
        myImg.src = "alekhine.jpg";
    } else if (count >= 1948 && count < 1957) {
        str = "Mikhail Botvinnik";
        myImg.src = "botvinnik.jpg";
    } else if (count >= 1957 && count < 1958) {
        str = "Vasily Smyslov";
        myImg.src = "smyslov.jpg";
    } else if (count >= 1958 && count < 1960) {
        str = "Mikhail Botvinnik";
        myImg.src = "botvinnik.jpg";
    } else if (count >= 1960 && count < 1961) {
        str = "Mikhail Tal";
        myImg.src = "tal.jpg";
    } else if (count >= 1961 && count < 1963) {
        str = "Mikhail Botvinnik";
        myImg.src = "botvinnik.jpg";
    } else if (count >= 1963 && count < 1969) {
        str = "Tigran Petrosian";
        myImg.src = "petro.jpg";
    } else if (count >= 1969 && count < 1972) {
        str = "Boris Spassky";
        myImg.src = "spassky.jpg";
    } else if (count >= 1972 && count < 1975) {
        str = "Bobby Fischer";
        myImg.src = "fischer.webp";
    } else if (count >= 1975 && count < 1985) {
        str = "Anatoly Karpov";
        myImg.src = "karpov.jpg";
    } else if (count >= 1985 && count < 2000) {
        str = "Garry Kasparov";
        myImg.src = "kasparov.jpg";
    } else if (count >= 2000 && count < 2007) {
        str = "Vladimir Kramnik";
        myImg.src = "kramnik.jpg";
    } else if (count >= 2007 && count < 2013) {
        str = "Viswanathan Anand";
        myImg.src = "anand.jpg";
    } else if (count >= 2013 && count < 2023) {
        str = "Magnus Carlsen";
        myImg.src = "magnus.jpg";
    } else if (count >= 2023 && count < 2025) {
        str = "Ding Liren"
        myImg.src = "ding.jpg";
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
    myImg.src = "chess.avif";
}