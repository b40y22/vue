<template>
    <div>
        <select class="form-control" v-model="selectedCurrency">
            <option
                v-for="currency in this.getCurrencies"
                :key="currency.id"
                :value="currency.id"
            >{{currency.title}}</option>
        </select>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: "CurrencyList",
    computed: {
        ...mapGetters(['getCurrencies', 'getCurrentCurrency']),
    },
    data() {
        return {
            selectedCurrency: null
        }
    },
    created() {
        this.selectedCurrency = this.getCurrentCurrency
    },
    watch: {
        selectedCurrency(newValue) {
            this.$store.commit('setSelectedCurrency', newValue);
        },
    }
}
</script>

<style scoped>

</style>