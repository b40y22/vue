<template>
    <div class="product-block">
        <product-filter/>
        <product-list/>
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
        ...mapState(['brands', 'suppliers']),
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
            this.makeFiltersObject();

        },
        makeFiltersObject() {
            this.getSuppliers.forEach((filter) => {
                if (filter.state) {
                    this.addToFilter({title:"supplier", value: filter});
                } else {
                    this.removeFromFilter({title:"supplier", value: filter});
                }
            });
        },
    },
    watch: {
        brands: {
            handler(){
                this.filterProducts();
            },
            deep: true
        },
        suppliers: {
            handler(){
                this.filterProducts();
            },
            deep: true
        }
    }
}
</script>
