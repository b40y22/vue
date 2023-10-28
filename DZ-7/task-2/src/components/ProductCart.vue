<template>
    <table class="table">
        <thead></thead>
        <tbody>
            <tr v-for="(product, index) in this.getProductCart" :key="product.id">
                <td class="col-lg-4">{{product.name}}</td>
                <td class="col-lg-2">{{getPrice(product)}} {{getPriceShort}}</td>
                <td class="col-lg-2">
                    <div v-if="product.amount > 1" class="product-amount">{{product.amount}}</div>
                </td>
                <td class="col-lg-4">
                    <button class="btn btn-danger" @click="deleteFromCart(index)">Видалити</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: "ProductCart",
    computed: {
        ...mapGetters(['getProducts', 'getCurrencies', 'getCurrentCurrency', 'getCurrencyRate', 'getProductCart']),
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
        deleteFromCart(index) {
            this.$store.dispatch('removeProductFromCart', index)
        }
    }
}
</script>
