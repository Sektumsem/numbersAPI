const number = document.querySelector('#searchNumber');

loadEventListener();

function loadEventListener() {
    
    number.addEventListener('keyup',searchNumber)
}

function searchNumber(e){
    const text = e.target.value.toLowerCase();
    var scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = `http://numbersapi.com/${text}/trivia?callback=showNumber`;
    document.body.appendChild(scriptTag);
    showNumber;
}

function showNumber(str) {
    
    document.getElementById('number-fact').innerText = str;
}

