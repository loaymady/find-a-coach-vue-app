<template>
  <div>
    <section>
      <BaseCard>
        <h2 class="text-2xl my-2 font-semibold">{{ fullName }}</h2>
        <h3 class="my-2 font-semibold">${{ rate }}/hour</h3>
      </BaseCard>
    </section>
    <section>
      <BaseCard>
        <header>
          <h2 class="text-2xl my-2 font-semibold">
            Interested? Reach out now!
          </h2>
          <BaseButton
            class="py-3 px-6"
            link
            :to="contactLink"
            v-if="!this.$route.path.endsWith('/contact')"
            >Contact</BaseButton
          >
        </header>
        <router-view></router-view>
      </BaseCard>
    </section>
    <section>
      <BaseCard>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p class="my-4">{{ description }}</p>
      </BaseCard>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>
