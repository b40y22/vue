<template>
    <div class="d-flex justify-content-center text-black mt-3">
        <h3>Task-3</h3>
    </div>
    <div class="d-flex justify-content-center">
        <div class="product-cards mt-5">
            <product-card :product-data="productData"/>
        </div>
    </div>
</template>

<script>
    import ProductCard from "@/components/ProductCard.vue";

    export default {
        name: "ProductPanel",
        components: {
            ProductCard
        },
        props: {
            productData: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .product-cards {
        width: 500px;
}
</style>