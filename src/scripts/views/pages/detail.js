import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate, createAllReview } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
            <div class="banner"></div>
            <div class="text">
                <h1>FIND YOUR RESTAURANT HERE</h1>
            </div>
            <h2 id="main" class="explore-text">Detail Restaurant</h2>
            <div id="restaurant"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector("#restaurant");
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

        const btnShow = document.querySelector("#btn-show");
        const reviewContainer = document.querySelector("#review-container");
        btnShow.addEventListener("click", () => {
            reviewContainer.innerHTML = createAllReview(restaurant.customerReviews);
            btnShow.classList.add("hidden");
        })
    }
}

export default Detail;