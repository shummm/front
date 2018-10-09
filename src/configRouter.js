module. exports = () => {

  return {
    "routes": [
      { "path": "/", "redirect": "/user", },
      { "path": "/user", "component": require ("./components/user.vue"). default, },
    ],
  };

};
