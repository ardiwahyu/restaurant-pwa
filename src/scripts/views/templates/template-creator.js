import CONFIG from '../../globals/config';
import extractStringFromList from '../../utils/string-from-list';

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

const createRestaurantDetailTemplate = (restaurant) => `
    <img class="image-detail" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}">
    <h1 class="padding20">${restaurant.name}</h1>
    <p class="padding10"><b>Rating: </b>${restaurant.rating}</p>
    <p class="padding10"><b>Location: </b>${restaurant.address}, ${restaurant.city}</p>
    <p class="padding10"><b>Kategori Menu: </b>${extractStringFromList(restaurant.categories)}</p>
    <p class="padding10"><b>Menu Makanan: </b></p>
    <ul class="marginStart40">
        ${createPoint(extractStringFromList(restaurant.menus.foods))}
    </ul>
    <p class="padding10"><b>Menu Minuman: </b></p>
    <ul class="marginStart40">
        ${createPoint(extractStringFromList(restaurant.menus.drinks))}
    </ul>
    <p class="padding10"><b>Deskripsi</b></p>
    <p class="padding10 justify">${restaurant.description}</p>
    <p class="padding10"><b>Customer Review</b></p>
    <div class="padding10">${createReview(restaurant.customerReviews)}</div>
`;

const createPoint = (array) => {
    let innerLi = "";
    array.forEach(element => {
        innerLi += `<li>${element}</li>`
    });
    return innerLi;
}

const createReview = (array) => {
    let innerReview = "";
    array.forEach(element => {
        innerReview += `
            <div class="card-review">
                <p><u>${element.date} by <b>${element.name}</b></u></p>
                <p>${element.review}</p>
            </div>
        `;
    });
    return innerReview;
}

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };