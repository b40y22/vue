<template>
    <div class="col-2">
        <label for="select-grade">Система оцінювання</label>
        <select class="form-control" id="select-grade" v-model="grade" @change="changeGrade">
            <option v-for="item in this.getGrades" :key="item.id" :value="item.id">{{item.value}}</option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "SelectGrade",
    data() {
        return {
            grade: null
        }
    },
    computed: {
        ...mapGetters(['getGrades', 'getCurrentGradeId'])
    },
    methods: {
        ...mapActions(['setCurrentGrade']),
        changeGrade() {
            this.setCurrentGrade(this.grade)
        }
    }
}
</script>

<style scoped>

</style>