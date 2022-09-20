Vue.component('product-list', {
    data() {
        return {
            catalogUrl: `${API}/catalogData.json`, //получить список товаров
            defaultImage: `https://theslide.ru/img/thumbs/2daedf1a87c5fdd74c6b583e95adde83-200x.jpg`,
            products: [],
            filter: [],
        }
    },
    methods: {
        filterGoods(searchLine) {
            let regexp = new RegExp(searchLine, 'i');
            this.filter = this.products.filter(item => regexp.test(item.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(this.catalogUrl)
            .then(items => {
                for (let item of items) {
                    this.products.push(item);
                }
            })
            .then(() => {
                this.filterGoods();
            });
    },
    template: `<div class="catalog">
                    <p v-if="!filter.length">По вышему запросу ничего не найдено.</p>
                    <product 
                    v-for="product in filter"
                    :key="product.id_product"
                    :product="product"
                    :image="defaultImage">
                    </product>
                </div>`
});