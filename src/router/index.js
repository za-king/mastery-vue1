import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelloWorld from "../components/HelloWorld.vue";
import JobsView from "../views/JobsView.vue";
import AddJobView from "../views/AddJobView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import JobView from "../views/JobView.vue";
import EditJobView from "../views/EditJobView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/hello",
      name: "hello",
      component: HelloWorld,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/add",
      name: "addjob",
      component: AddJobView,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },
    {
      path: "/jobs/edit/:id",
      name: "editjob",
      component: EditJobView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
