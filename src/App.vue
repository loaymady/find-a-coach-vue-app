<template>
  <Navbar />
  <div class="max-w-screen-md mx-auto p-6"><router-view /></div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import BaseCard from './components/ui/BaseCard.vue';

export default {
  components: {
    Navbar,
    BaseCard,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
