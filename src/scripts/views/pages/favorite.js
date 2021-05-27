import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
            <div class="banner"></div>
            <div class="text">
                <h1>FIND YOUR RESTAURANT HERE</h1>
            </div>
            <h2 id="main" class="explore-text">Your Favorite Restaurant</h2>
            <div class="row" id="container-list"></div>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        const listContainer = document.querySelector("#container-list");
        restaurants.forEach((restaurant) => {
            listContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    }
}

export default Favorite;