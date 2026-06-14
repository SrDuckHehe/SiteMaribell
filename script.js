
const CONFIG = {
  name:         "Maria Clara Frutuoso dos Santos",
  date:         "14 · 06 · 2026",       

  featureTitle: "Cada momento ao seu lado<br>é um presente.",
  featureBody: `
Hoje é mais um daqueles dias em que paramos para analisar toda a nossa trajetória.
Todo o nosso amor, construído durante este tempo, todas as nossas lutas e conquistas
— nada disso seria possível sem a ajuda d'Ele.

E, através d'Ele, posso agradecer todos os dias por ter essa garota que é você.
A pessoa que mais me ajuda, que se tornou meu porto seguro.

O que era para ser apenas uma paixão de verão se tornou a paixão que levarei
para toda a minha vida, juntamente com o sonho de construir uma família
ao seu lado diante de Deus.

Hoje, mais uma vez, eu paro para agradecer pela sorte que foi te conhecer.
Espero que todos os seus sonhos e os nossos sonhos se realizem diante d'Ele.

Pois, assim como está escrito em Salmos 125:1:

"Os que confiam no Senhor serão como o monte de Sião,
que não se abala, mas permanece para sempre."
`,


  closingText: `
Que este nosso 1 ano e 10 meses juntos seja apenas o começo de uma história 
ainda mais bonita. Que os meses se transformem em anos, e que os anos se 
transformem em décadas. Que os nossos 1 ano e 10 meses se tornem 10, 20, 
30 anos ou até uma vida inteira lado a lado, compartilhando sonhos, 
superando desafios e construindo memórias inesquecíveis. Que Deus continue 
guiando os nossos passos e abençoando a nossa história. Eu te amo hoje, 
amanhã e por todos os dias da minha vida.`,



  tickerWords: [
    "Cânticos 4:7",
    "feliz nosso dia",
    "você é especial",
    "14/06/2026",
    "com todo meu amor",
    "Eu te amo",
    "Amor eterno",
    "Filipenses 1:3",
    "1 ano e 10 meses"
  ],

  
  tags: ["#nossodia", "#Amor", "#Felicidades", "#ParaVoce", "1 ano e 10 meses"],
};



function applyConfig() {
  document.getElementById("hero-name").textContent   = CONFIG.name;
  document.getElementById("hero-date").textContent   = CONFIG.date;
  document.getElementById("feature-title").innerHTML = CONFIG.featureTitle;
  document.getElementById("feature-body").textContent = CONFIG.featureBody;
  document.getElementById("closing-text").textContent = CONFIG.closingText;

  // Tags
  const tagsEl = document.getElementById("tags");
  tagsEl.innerHTML = CONFIG.tags.map(t => `<span>${t}</span>`).join("");

  // Ticker — duplicado para loop contínuo
  const track = document.getElementById("ticker");
  const words = [...CONFIG.tickerWords, ...CONFIG.tickerWords];
  track.innerHTML = words.map(w => `<span>${w}</span><span>★</span>`).join("");
}



function initFadeUp() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
}



document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initFadeUp();
});
