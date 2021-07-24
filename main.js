const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantitiy:50, onSale: true },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantitiy:0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed:{
        title(){
            return `${this.brand} ${this.product}`;
        },
        howeredVariant(){
            const variant = this.variants[this.selectedVariant];
            return { ...variant, inStock : variant.quantitiy > 0}
        },
        onSale(){
            return this.variants[this.selectedVariant].onSale? '10 times on Sale': '';
        }
    }
})
