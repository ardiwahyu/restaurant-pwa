const Detail = {
    async render() {
        return `
            <div class="banner"></div>
            <div class="text">
                <h1>FIND YOUR RESTAURANT HERE</h1>
            </div>
            <h2 id="main" class="explore-text">Detail Restaurant</h2>
            <div class="row" id="container-list"></div>
        `;
    },

    async afterRender() {

    }
}

export default Detail;