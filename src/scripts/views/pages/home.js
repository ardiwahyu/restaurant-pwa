import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import LoadingInitiator from '../../utils/loading-initiator';

const Home = {
  async render() {
    return `
            <div class="banner"></div>
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
    const restaurants = await RestaurantSource.listRestaurant();
    const listContainer = document.querySelector('#container-list');
    restaurants.forEach((restaurant) => {
      listContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    LoadingInitiator.hideLoading();
  },
};

export default Home;
