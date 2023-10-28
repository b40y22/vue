<template>
    <div class="col-2 col-lg-offset-1">
        <label for="select-category">Категорія</label>
        <select class="form-control" id="select-category" v-model="category" @change="changeCategory">
            <option v-for="category in this.getCategories" :key="category.id" :value="category.id">{{category.name}}</option>
        </select>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: "SelectCategory",
    data() {
        return {
            category: null
        }
    },
    computed: {
        ...mapGetters(['getCategories'])
    },
    methods: {
        changeCategory() {
            //
        }
    }
}
</script>

<style scoped>

</style>