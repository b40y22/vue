import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactsView from "@/views/ContactsView.vue";
import CreateView from "@/views/CreateView.vue";
import EditView from "@/views/EditView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
  {
    path: "/create",
    name: "create",
    component: CreateView,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
