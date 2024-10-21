<template>
  <div>
    <BaseDialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </BaseDialog>
    <BaseCard>
      <form @submit.prevent="submitForm" class="p-4 flex flex-col space-y-2">
        <div class="form-control my-2 mx-0">
          <label class="font-bold mb-2 block" for="email">E-Mail</label>
          <input
            class="block w-full border border-[#ccc] p-1 focus:border-[#3d008d] focus:bg-[#faf6ff] focus:outline-none"
            type="email"
            id="email"
            v-model.trim="email"
          />
        </div>
        <div class="form-control my-2 mx-0">
          <label class="font-bold mb-2 block" for="password">Password</label>
          <input
            class="block w-full border border-[#ccc] p-1 focus:border-[#3d008d] focus:bg-[#faf6ff] focus:outline-none"
            type="password"
            id="password"
            v-model.trim="password"
          />
        </div>
        <p v-if="!formIsValid" class="text-red-500">
          Please enter a valid email and password (must be at least 6 characters
          long).
        </p>
        <div class="!mt-7">
          <BaseButton class="tracking-wide" :disabled="isLoading">
            <template v-if="isLoading">
              <BaseSpinner :inButton="true" />
            </template>
            <template v-else>
              {{ submitButtonCaption }}
            </template>
          </BaseButton>

          <BaseButton
            class="tracking-wide border border-gray-500 text-gray-500 ml-2"
            type="button"
            mode="signup"
            @click="switchAuthMode"
            >{{ switchModeButtonCaption }}</BaseButton
          >
        </div>
      </form>
    </BaseCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', actionPayload);
        } else {
          await this.$store.dispatch('signup', actionPayload);
        }
        const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');
        this.$router.replace(redirectUrl);
      } catch (error) {
        this.error = error.message || 'Failed to authenticate';
      }

      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
