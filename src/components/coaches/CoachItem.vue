<template>
  <li class="mt-4 mb-8 border border-[#424242] rounded-xl p-4">
    <h3 class="text-2xl my-2 font-semibold">{{ fullName }}</h3>
    <h4 class="my-4 font-semibold">${{ rate }}/hour</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="flex justify-end mt-4 mb-2">
      <BaseButton mode="outline" link :to="coachContactLink"
        >Contact</BaseButton
      >
      <BaseButton link :to="coachDetailsLink">View Details</BaseButton>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact'; // /coaches/c1/contact
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id; // /coaches/c1 
    },
  },
};
</script>
