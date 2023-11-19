import { createRouter, createWebHistory } from "vue-router";
import RootView from "@/views/RootView.vue";
import EmployeesView from "@/views/EmployeesView.vue";
import CandidatesView from "@/views/CandidatesView.vue";
import MeetsView from "@/views/MeetsView.vue";
import CandidateEdit from "@/views/CandidateEdit.vue";
import EmployeeEdit from "@/views/EmployeeEdit.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: RootView,
  },
  {
    path: "/employees",
    name: "employees",
    component: EmployeesView,
  },
  {
    path: "/candidates",
    name: "candidates",
    component: CandidatesView,
  },
  {
    path: "/candidate/:id",
    name: "candidate-edit",
    component: CandidateEdit,
  },
  {
    path: "/employee/:id",
    name: "employee-edit",
    component: EmployeeEdit,
  },
  {
    path: "/meets",
    name: "meets",
    component: MeetsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
