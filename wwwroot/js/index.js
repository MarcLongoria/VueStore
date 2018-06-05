var vm = new Vue({
    el: "#index-page",
    data: {
        appName: "Product List",
        today: new Date(),
        error: "",
        products: [],
        isBusy: false
    },
    methods: {
        onBuy: function (product) {
            alert("Buying: " + product.name);
        },
        SortBy: function (by) {
            this.products = _.sortBy(this.products, by);
        }
    },
    mounted: function () {
        //this.error = "You must call the API, it's not built yet...";
        isBusy = true;
        axios.get("/api/products")
            .then(function (res) { this.products = res.data.results; isBusy = false; }.bind(this)).catch(function () { this.error = "Could not load products"; isBusy = false; }.bind(this));
    }

});