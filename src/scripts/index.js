import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#nav'),
    content: document.querySelector('main')
})

window.addEventListener('hashchange', () => {
    app.renderPage();
})

window.addEventListener('load', () => {
    app.renderPage();
})

// import data from '../DATA.json';

// const humberger = document.getElementById('hamburger');
// const nav = document.getElementById('nav');
// humberger.addEventListener("click", function () {
//     if (nav.classList.contains('hidden')) {
//         nav.classList.remove('hidden');
//     } else {
//         nav.classList.add('hidden');
//     }
// })

// const row = document.getElementById('container-list');
// data.restaurants.forEach((restaurant) => {
//     console.log(restaurant.name);
//     row.innerHTML = row.innerHTML + `
//         <div class="column">
//             <div class="card" tabindex="0">
//                 <img class="icon" alt="${restaurant.name}" src="${restaurant.pictureId}">
//                 <div class="city">
//                     <p class="text-city">${restaurant.city}</p>
//                 </div>
//                 <p class="rating">Rating: ${restaurant.rating}</p>
//                 <p class="title">${restaurant.name}</p>
//                 <p class="subtitle">${restaurant.description}.</p>
//             </div>
//         </div>
//     `;
// });

