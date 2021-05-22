const Favorite = {
    async render() {
        return `
            <div class="banner"></div>
            <div class="text">
                <h1>FIND YOUR RESTAURANT HERE</h1>
            </div>
            <h2 id="main" class="explore-text">Your Favorite Restaurant</h2>
            <div id="restaurant"></div>
        `;
    },

    async afterRender() {

    }
}

export default Favorite;