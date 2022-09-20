const DEFAULT_IMAGE = `https://theslide.ru/img/thumbs/2daedf1a87c5fdd74c6b583e95adde83-200x.jpg`;
const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const app = new Vue({
    el: '#app',
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error));
        },
    },
});