<template>
  <BaseCard>
    <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900">
      Find Your Coach
    </h5>

    <div class="flex md:space-x-5 space-y-2 md:space-y-0 max-w-screen-xl mx-auto p-2 flex-wrap">
      <div class="flex items-center me-4 md:me-4 text-xl">
        <input
          id="frontend"
          type="checkbox"
          checked
          @change="setFilter"
          class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-0 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="frontend" class="ms-2 font-medium text-black"
          >Frontend</label
        >
      </div>
      <div class="flex items-center me-4 md:me-4 text-xl">
        <input
          id="backend"
          type="checkbox"
          checked
          @change="setFilter"
          class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-0 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="backend" class="ms-2 font-medium text-black">Backend</label>
      </div>
      <div class="flex items-center me-4 md:me-4 text-xl">
        <input
          id="career"
          type="checkbox"
          checked
          @change="setFilter"
          class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-0 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="career" class="ms-2 font-medium text-gray-900"
          >Career</label
        >
      </div>
    </div>
  </BaseCard>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style></style>
