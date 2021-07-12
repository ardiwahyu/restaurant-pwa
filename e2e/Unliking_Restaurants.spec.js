/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable no-undef */
Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Uniking one retaurant', ({ I }) => {
  /*skema like*/
  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  /*skema unlike*/
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('No Data Found', '#container-empty');
});
