<template lang="pug">
div
  svg
  router-view
</template>



<script>
import svg from './layout/svg'

export default {
  name: "index",
  components: {
    svg
  }
};
</script>


<style lang="scss">
.title {
  color: $secondary-purple-bright;
  font-family: "Roboto Regular";
}
</style>
