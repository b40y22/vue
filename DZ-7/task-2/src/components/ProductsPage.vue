<template>
    <div class="container">
        <div class="task-title">
            Task-2
        </div>

        <div class="row">
            <div class="page-title">Вітаємо на нашому сайті</div>
        </div>

        <div class="product-list">
            <div class="col-lg-8">
                <product-list/>
            </div>
            <div class="col-lg-4">
                <currency-list/>
            </div>
        </div>

        <hr>

        <div class="product-cart">
            <div class="col-lg-8">
                <product-cart/>
                <total-price v-if="getProductCart.length"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import CurrencyList from "@/components/CurrencyList.vue";
import ProductCart from "@/components/ProductCart.vue";
import TotalPrice from "@/components/TotalPrice.vue";
import { mapGetters } from "vuex"

export default {
    name: "ProductsPage",
    components: {TotalPrice, ProductCart, CurrencyList, ProductList},
    computed: {
        ...mapGetters(['getProductCart'])
    }
}
</script>

<style scoped>

</style>