document.documentElement.classList.add("js-enabled");

const titre = document.querySelector(".jump");

if (titre) {
    titre.innerHTML = [...titre.textContent].map(char => (char === ' ' ? '\u00A0' : `<span>${char}</span>`)).join('');
}