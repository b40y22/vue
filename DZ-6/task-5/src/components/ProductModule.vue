<template>
    <div class="product-block">
        <product-filter/>
        <product-list :products="filterProducts()"/>
    </div>
</template>

<script>
import ProductFilter from "@/components/ProductFilter.vue";
import ProductList from "@/components/ProductList.vue";
import {brands, products, suppliers} from "@/data";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
    name: "ProductModule",
    components: {ProductList, ProductFilter},
    computed: {
        ...mapGetters(['getBrands', 'getSuppliers', 'getFilters', 'getProducts']),
        ...mapState(['filters']),
    },
    data() {
        return {
            products,
        }
    },
    created() {
        this.$store.dispatch("setBrands", brands);
        this.$store.dispatch("setProducts", products);
        this.$store.dispatch("setSuppliers", suppliers);
    },
    methods: {
        ...mapActions(['addToFilter', 'removeFromFilter']),
        filterProducts() {
            let products = this.getProducts;

            //
            console.log(products)

            return products;
        },
    },
    watch: {
        filters: {
            handler(){
                this.filterProducts();
            },
            deep: true
        }
    }
}
</script>
