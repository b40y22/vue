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
                <tr v-for="(student, index) in getStudentsWithFilter" :key="student.id">
                    <th scope="row">{{index + 1}}</th>
                    <td>{{student.name}}</td>
                    <td>{{getStudentGrade(student)}}</td>
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
        ...mapGetters(['getStudents', 'getGrades', 'getCurrentGradeId', 'getCurrentCategoryId', 'getCategories']),
        getStudentsWithFilter() {
            let students = this.getStudents;
            let currentCategory = this.getCategories.filter(category => {
                return category.id === this.getCurrentCategoryId
            })

            if (this.getCurrentCategoryId) {
                students = this.getStudents.filter((student) => {
                    if (currentCategory[0].gradeArray.includes(student.grade)) {
                        return student;
                    }
                    if (currentCategory[0].name === 'Відмінник' && student.grade > 12) {
                        return student;
                    }
                })
            } else {
                students = this.getStudents;
            }

            return students;
        }
    },
    methods: {
        getStudentGrade(student) {
            let grade = this.getGrades.filter(item => item.id === this.getCurrentGradeId);

            if (grade[0].value === 5) {
                if (student.grade >= 10) {
                    return  5;
                } else if (student.grade >= 7) {
                    return  4;
                } else if (student.grade >= 4) {
                    return  3;
                } else if (student.grade >= 2) {
                    return  2;
                } else {
                    return  1;
                }
            }

            return student.grade;
        }
    }
}
</script>

<style scoped>

</style>