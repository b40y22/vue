<template>
    <div class="col-2 col-lg-offset-1">
        <label for="select-category">Категорія</label>
        <select class="form-control" id="select-category" v-model="categoryId" @change="this.setCurrentCategoryId(this.categoryId)">
            <option v-for="category in this.getCategories" :key="category.id" :value="category.id">{{category.name}}</option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
    name: "SelectCategory",
    data() {
        return {
            categoryId: null
        }
    },
    computed: {
        ...mapGetters(['getCategories', 'getCurrentGradeId'])
    },
    methods: {
        ...mapActions(['setCurrentCategoryId']),
    }
}
</script>

<style scoped>

</style>