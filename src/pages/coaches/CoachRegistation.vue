<template>
  <section>
    <base-card>
      <h2 class="text-2xl font-bold">Register as a coach now!</h2>
      <CoachForm @save-data="saveData"></CoachForm>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      console.log(data);
    },
  },
};
</script>
