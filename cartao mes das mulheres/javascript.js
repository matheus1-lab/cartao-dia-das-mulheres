const quotes = [
    "Mulheres não apenas usam a tecnologia, elas moldam o futuro dela.",    
    "Onde existe um desafio, existe uma mulher liderando a solução.",
    "Menos padrões, mais protagonistas. O código do futuro é feminino.",
    "Inteligência, coragem e inovação: os componentes essenciais de toda mulher.",
    "Mulheres no código e na música transformam o futuro."
];

const btn = document.getElementById('btnCelebrate');
const textEl = document.getElementById('quoteText');
const spotifyicon = document.querySelector('.fa-spotify');

btn.addEventListener('click', () => {
    // 1. Disparar Confetes
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#6c5ce7', '#fd79a8', '#a29bfe']
        });
    }

    // 2. Trocar a Frase com transição de opacidade
    textEl.style.opacity = 0;
    setTimeout(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        textEl.innerText = randomQuote;
        textEl.style.opacity = 1;
    }, 300);
});

// Animação do ícone ao clicar
if (spotifyicon) {
    spotifyicon.style.cursor = "pointer";
    spotifyicon.addEventListener('click', () => {
        spotifyicon.style.transition = "transform 0.5s ease";
        spotifyicon.style.transform = "rotate(360deg)";
        setTimeout(() => {
            spotifyicon.style.transform = "rotate(0deg)";
        }, 500);
    });
}
