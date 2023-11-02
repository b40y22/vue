<template>
    <div class="product-filter-block">

        <div id="supplier-block">
            <div class="d-flex">
                <div class="seller-title">Продавець <span class="seller-title-amount">{{getAmountSuppliers}}</span></div>
            </div>
            <div class="d-flex mt-2" v-for="supplier in getSuppliers" :key="supplier.id">
                <input type="checkbox" class="supplier-checkbox" v-model="supplier.state">
                <div>{{supplier.name}}</div>
            </div>
        </div>

        <hr>

        <div id="brand-block">
            <div class="d-flex">
                <div class="brand-title">Бренд <span class="brand-title-amount">{{getAmountBrands}}</span></div>
            </div>
            <div id="alphabetical-index">Алфавитний вказівник</div>
            <div class="d-flex mt-2" v-for="brand in getBrands" :key="brand.id">
                <input type="checkbox" class="supplier-checkbox" v-model="brand.state">
                <div>{{brand.name}}</div>
            </div>
        </div>

    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "ProductFilter",
    computed: {
        ...mapGetters(['getBrands', 'getSuppliers']),
        getAmountBrands() {
            return this.getBrands.length;
        },
        getAmountSuppliers() {
            return this.getSuppliers.length;
        },
    }
}
</script>
