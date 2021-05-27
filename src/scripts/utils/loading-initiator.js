const LoadingInitiator = {
    init() {
        this._overlay = document.querySelector('.overlay');
        this._spanner = document.querySelector('.spanner');
    },

    showLoading() {
        this._overlay.classList.add('show');
        this._spanner.classList.add('show');
    },

    hideLoading() {
        this._overlay.classList.remove('show');
        this._spanner.classList.remove('show');
    }
}

export default LoadingInitiator;