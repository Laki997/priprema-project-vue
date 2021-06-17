import Vue from "vue";
import VueRouter from "vue-router";
import AppRegister from "../components/AppRegister";
import AppLogin from "../components/AppLogin";
import AppPosts from "../components/AppPosts";
import AddPost from "../components/AddPost";
import SinglePost from "../components/SinglePost";
import EditPost from "../components/EditPost";

Vue.use(VueRouter);

const routes = [
  {
    path: "/register",
    component: AppRegister,
  },
  {
    path: "/login",
    component: AppLogin,
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/add",
    component: AddPost,
  },
  {
    path: "/posts",
    component: AppPosts,
  },
  {
    path: "/posts/:id",
    component: SinglePost,
    props: true,
  },
  {
    path: "/edit/:id",
    component: EditPost,
    props: true,
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

export default router;
