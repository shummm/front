import Adverts from "./pages/adverts.vue";

const routes = [
  { path: '/', redirect: '/adverts'},
  { path: '/adverts', component: Adverts }
]

export default routes