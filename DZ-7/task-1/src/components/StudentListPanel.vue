<template>
    <div class="container">
        <div class="task-title">
            Task-1
        </div>

        <div class="filter">
            <select-grade/>
            <select-category/>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Спісок студентів</th>
                    <th scope="col">Середній бал</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student, index) in this.getStudents" :key="student.id">
                    <th scope="row">{{index + 1}}</th>
                    <td>{{student.name}}</td>
                    <td>{{student.grade}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import SelectGrade from "@/components/SelectGrade.vue";
import SelectCategory from "@/components/SelectCategory.vue";
import { mapGetters } from "vuex"
export default {
    name: "StudentListPanel",
    components: {SelectCategory, SelectGrade},
    computed: {
        ...mapGetters(['getStudents'])
    }
}
</script>

<style scoped>

</style>