import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  const palos = ['♠', '♥', '♦', '♣'];
  const colores = {
    '♠': 'text-dark',
    '♣': 'text-dark',
    '♥': 'text-danger',
    '♦': 'text-danger'
  };
  const numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const palo = palos[Math.floor(Math.random() * palos.length)];
  const numero = numeros[Math.floor(Math.random() * numeros.length)];
  const color = colores[palo];

  const carta = document.createElement('div');
  carta.className = `card text-center ${color}`;
  carta.style.width = '16rem';
  carta.style.height = '22rem';
  carta.style.fontSize = '2.5rem';
  carta.style.borderRadius = '1rem';

  carta.innerHTML = `
      <div class="card-body d-flex flex-column justify-content-between">
        <p class="card-text me-auto" style="font-size: 2rem;">${palo}</p>
        <h1 class="card-title">${numero}</h1>
        <p class="card-text ms-auto" style="font-size: 2rem;">${palo}</p>
      </div>
    `;

  document.getElementById('carta').appendChild(carta);

};
