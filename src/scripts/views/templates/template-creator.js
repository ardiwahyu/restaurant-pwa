import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
    <a href="/#/detail/${restaurant.id}">
        <div class="column">
            <div class="card" tabindex="0">
                <img class="icon" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}">
                <div class="city">
                    <p class="text-city">${restaurant.city}</p>
                </div>
                <p class="rating">Rating: ${restaurant.rating}</p>
                <p class="title">${restaurant.name}</p>
                <p class="subtitle">${restaurant.description}.</p>
            </div>
        </div>
    </a>
`;

export { createRestaurantItemTemplate };