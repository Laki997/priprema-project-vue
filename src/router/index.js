import Vue from "vue";
import VueRouter from "vue-router";
import AppRegister from "../components/AppRegister";
import AppLogin from "../components/AppLogin";
import AppPosts from "../components/AppPosts";
import AddPost from "../components/AddPost";
import SinglePost from "../components/SinglePost";
import EditPost from "../components/EditPost";
import { globalAuthGuard } from "../guards/authGuard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/register",
    component: AppRegister,
    meta: { guestRequired: true },
  },
  {
    path: "/login",
    component: AppLogin,
    meta: { guestRequired: true },
  },
  {
    path: "/",
    redirect: "/posts",
  },
  {
    path: "/add",
    component: AddPost,
    meta: { authRequired: true },
  },
  {
    path: "/posts",
    component: AppPosts,
    meta: { authRequired: true },
  },
  {
    path: "/posts/:id",
    component: SinglePost,
    props: true,
    meta: { authRequired: true },
  },
  {
    path: "/edit/:id",
    component: EditPost,
    props: true,
    meta: { authRequired: true },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach(globalAuthGuard);

export default router;
