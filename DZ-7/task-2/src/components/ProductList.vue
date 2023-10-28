<template>
    <div>
        <table class="table">
            <thead></thead>
            <tbody>
                <tr v-for="product in this.getProducts" :key="product.id">
                    <td class="col-lg-4">{{product.name}}</td>
                    <td class="col-lg-4">{{getPrice(product)}} {{getPriceShort}}</td>
                    <td class="col-lg-4">
                        <button class="btn btn-success" @click="toCart(product)">Купити</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: "ProductList",
    computed: {
        ...mapGetters(['getProducts', 'getCurrencies', 'getCurrentCurrency', 'getCurrencyRate']),
        getCurrentCurrencyObject() {
            return this.getCurrencies.filter((item) => {
                return item.id === this.getCurrentCurrency
            })
        },
        getPriceShort() {
            if (this.getCurrentCurrencyObject[0]) {
                return this.getCurrentCurrencyObject[0].short
            }
            return ''
        }
    },
    methods: {
        getPrice(product) {
            let price = product.price;

            if (this.getCurrentCurrencyObject[0].code !== "uah") {
                price = (price / this.getCurrencyRate).toFixed(2)
            }

            return price
        },
        toCart(product) {
            this.$store.dispatch('addProductToCart', product)
        }
    }
}
</script>
