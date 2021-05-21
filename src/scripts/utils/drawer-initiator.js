const DrawerInitiator = {
    init({ button, drawer, content }) {
        button.addEventListener('click', (event) => {
            if (drawer.classList.contains('hidden')) {
                this._toggleDrawer(event, drawer);
            } else {
                this._closeDrawer(event, drawer);
            }
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });
    },

    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('hidden');
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.add('hidden');
    },
};


export default DrawerInitiator;