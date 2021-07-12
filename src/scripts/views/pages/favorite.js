import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import LoadingInitiator from '../../utils/loading-initiator';

const Favorite = {
  async render() {
    return `
            <div class="banner">
              <picture>
                <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg"/>
                <img
                  src='./images/hero-image_2-large.jpg'
                  alt="banner"></img>
              </picture>
            </div>
            <div class="text">
                <h1>FIND YOUR RESTAURANT HERE</h1>
            </div>
            <h2 id="main" class="explore-text">Your Favorite Restaurant</h2>
            <div id="container-empty">No Data Found</picture>
            </div>
            <div class="row" id="container-list"></div>
        `;
  },

  async afterRender() {
    LoadingInitiator.init();

    LoadingInitiator.showLoading();
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      const listContainer = document.querySelector('#container-list');
      const containerEmpty = document.querySelector('#container-empty');
      if (restaurants.length === 0) {
        containerEmpty.classList.remove('hide');
      } else {
        containerEmpty.classList.add('hide');
        restaurants.forEach((restaurant) => {
          listContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      }
    } catch (error) {
      alert(`${error}\nGagal memuat halaman, cobalah beberapa saat lagi`);
    }
    LoadingInitiator.hideLoading();
  },
};

export default Favorite;
