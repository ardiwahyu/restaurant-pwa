import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
    createRestaurantDetailTemplate,
    createAllReview,
    createLikeButtonTemplate,
    createLikedButtonTemplate
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
        return `
            <div class="banner"></div>
            <div class="text">
                <h1>FIND YOUR RESTAURANT HERE</h1>
            </div>
            <h2 id="main" class="explore-text">Detail Restaurant</h2>
            <div class="restaurant-container" id="restaurant"></div>
            <p class="restaurant-container" class="padding10"><b>Add Review</b></p>
            <div class="add-review restaurant-container">
                <div class="container-input">
                    <p class="label">Name</p>
                    <input class="input" type="text" id="name" name="name" placeholder="Your name.."></input>
                </div>
                <div class="container-input">
                    <p class="label">Review</p>
                    <textarea class="input" type="text" id="review" name="review" placeholder="Write something.."></textarea>
                </div>
                <button id="btn-submit">Submit</button>
            </div>
            <div id="likeButtonContainer"></div>
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
            btnShow.classList.add("hide");
        })

        const btnSubmit = document.querySelector("#btn-submit");
        const name = document.querySelector("#name");
        const review = document.querySelector("#review");
        btnSubmit.addEventListener("click", async () => {
            if (!name.value || !review.value) {
                alert("Lengkapi isian")
            } else {
                const reviews = await RestaurantSource.addReview(JSON.stringify(
                    {
                        "id": `${url.id}`,
                        "name": `${name.value}`,
                        "review": `${review.value}`
                    }
                ));
                reviewContainer.innerHTML = createAllReview(reviews);
                name.value = "";
                review.value = "";
                btnShow.classList.add("hide");
            }
        });

        LikeButtonInitiator.Infinity({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                pictureId: restaurant.pictureId,
                city: restaurant.city,
                rating: restaurant.rating,
                description: restaurant.description
            }
        });
    }
}

export default Detail;