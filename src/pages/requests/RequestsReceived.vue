<template>
  <div>
    <section>
      <base-card>
        <header class="text-center">
          <h2 class="text-2xl my-4 font-bold">Requests Received</h2>
        </header>
        <ul class="list-none my-8 mx-auto max-w-lg" v-if="hasRequests">
          <request-item
            v-for="req in receivedRequests"
            :key="req.id"
            :email="req.userEmail"
            :message="req.message"
          ></request-item>
        </ul>
        <h3 class="text-center text-lg mb-4 font-bold" v-else>
          You haven't received any requests yet!
        </h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: {
    RequestItem,
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
};
</script>
