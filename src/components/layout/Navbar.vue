<template>
  <nav class="bg-gray-800 border-gray-800">
    <div
      class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link
        to="/"
        class="flex items-center space-x-4 rtl:space-x-reverse"
        :class="{
          'text-blue-500': $route.path === '/',
          'hover:text-blue-500': $route.path !== '/',
        }"
      >
        <img
          src="/src/assets/logo.jpg"
          class="h-9 rounded-full mt-1"
          alt="Coach Logo"
        />
        <span
          class="self-center text-3xl italic font-semibold whitespace-nowrap text-white"
          >Find A Coach</span
        >
      </router-link>

      <button
        data-collapse-toggle="navbar-multi-level"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-multi-level"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul
          class="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700"
        >
          <li>
            <router-link
              to="/coaches"
              :class="{
                'hover:text-blue-500': $route.path !== '/coaches',
              }"
              active-class="!text-blue-500"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
              >All Coaches</router-link
            >
          </li>

          <li v-if="isLoggedIn">
            <router-link
              to="/requests"
              :class="{
                'hover:text-blue-500': $route.path !== '/requests',
              }"
              active-class="!text-blue-500"
              class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
              >Requests</router-link
            >
          </li>
          <li v-else>
            <router-link
              active-class="!text-blue-500"
              class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
              to="/auth"
              >Login</router-link
            >
          </li>
          <li v-if="isLoggedIn">
            <base-button @click="logout">Logout</base-button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/coaches');
    },
  },
};
</script>
