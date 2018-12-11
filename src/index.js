import Vue from "vue";
import VueRouter from "vue-router";
import index from "./index.vue";
import routes from "./routes";


// const Vue = require ("vue");
const Vuex = require ("vuex");
// const VueRouter = require ("vue-router");
const VueResource = require ("vue-resource");


// const index = require ("./index.vue"). default;


Vue. config. debug = true;
Vue. config. devtools = true;


Vue. use (VueRouter);
Vue. use (Vuex);
Vue. use (VueResource);

const router = new VueRouter ({
  routes,
  // mode: 'history'
});


new Vue ({
  "el": "#app",
  router,
  "render": h => h (index),
});
