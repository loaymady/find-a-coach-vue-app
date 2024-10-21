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
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>

<style scoped></style>
