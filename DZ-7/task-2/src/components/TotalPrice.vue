<template>
    <div>
        <table class="table">
            <thead></thead>
            <tbody>
            <tr>
                <td class="col-lg-4"><b>До сплати</b></td>
                <td class="col-lg-4">
                    {{getTotalPrice()}} {{getPriceShort}}
                </td>
                <td class="col-lg-4">
                    <button class="btn btn-primary">Оплатити</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "TotalPrice",
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
        getTotalPrice() {
            let totalPrice = 0;

            this.getProductCart.forEach(item => {
                let productPrice = item.price * item.amount;
                totalPrice += productPrice;
            })

            if (this.getCurrentCurrencyObject[0].code === 'usd') {
                totalPrice = (totalPrice / this.getCurrencyRate).toFixed(2)
            }

            return totalPrice;
        }
    }
}
</script>

<style scoped>

</style>