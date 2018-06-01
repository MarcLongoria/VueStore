var x = new Vue({
    el: "#index-page",
    data: {
        appName: "The Store",
        products: [{
            imageUrl: "/images/noimage.png",
            brand: "Shawn's Stuff",
            category: "Paper Products",
            name: "Magic Writing Paper",
            price: 12.99,
            onSale: true
        }, {
            imageUrl: "/images/noimage.png",
            brand: "Shawn's Stuff",
            category: "Paper Products",
            name: "Magic Writing Paper Two",
            price: 15.99,
            onSale: false
        }, {
            imageUrl: "/images/noimage.png",
            brand: "Shawn's Stuff",
            category: "Paper Products",
            name: "Magic Writing Paper Three",
            price: 12.99,
            onSale: true
        },
        ]
    },
    methods: {
        onBuy: function (product) {
            alert("Buying + " + product);
        }
    }
});