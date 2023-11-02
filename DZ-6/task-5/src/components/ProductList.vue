<template>
    <div class="product-list-block">
        <product-card v-for="product in getProducts" :key="product.id" :product="product"/>
    </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import {mapGetters} from "vuex";

export default {
    name: "ProductList",
    components: {ProductCard},
    computed: {
        ...mapGetters(['getProducts'])
    }
}
</script>
