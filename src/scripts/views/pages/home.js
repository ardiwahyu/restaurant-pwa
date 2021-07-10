import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import LoadingInitiator from '../../utils/loading-initiator';

const Home = {
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
            <h2 id="main" class="explore-text">Explore Restaurant</h2>
            <div class="row" id="container-list"></div>
        `;
  },

  async afterRender() {
    LoadingInitiator.init();

    LoadingInitiator.showLoading();
    try {
      const restaurants = await RestaurantSource.listRestaurant();
      const listContainer = document.querySelector('#container-list');
      restaurants.forEach((restaurant) => {
        listContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      alert(`${error}\nGagal memuat halaman, cobalah beberapa saat lagi`);
    }
    LoadingInitiator.hideLoading();
  },
};

export default Home;
