import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomePage/Home.vue"),
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/FavoriteGalleryPage/FavoriteGallery.vue"
      ),
  },
  {
    path: "/:id",
    name: "BreedGallery",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/BreedGalleryPage/BreedGallery.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
