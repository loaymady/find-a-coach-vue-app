<template>
  <Navbar />
  <div class="max-w-screen-lg mx-auto p-6">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
