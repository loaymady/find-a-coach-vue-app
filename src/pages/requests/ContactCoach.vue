<template>
  <form
    @submit.prevent="submitForm"
    class="m-4 border border-[#ccc] rounded-xl p-4"
  >
    <div class="form-control my-2 mx-0">
      <label class="font-bold mb-2 block" for="email">Your E-Mail</label>
      <input
        class="block w-full border border-[#ccc] p-1 focus:border-[#3d008d] focus:bg-[#faf6ff] focus:outline-none"
        type="email"
        id="email"
        v-model.trim="email"
      />
    </div>
    <div class="form-control my-2 mx-0">
      <label class="font-bold mb-2 block" for="message">Message</label>
      <textarea
        class="block w-full border border-[#ccc] p-1 focus:border-[#3d008d] focus:bg-[#faf6ff] focus:outline-none"
        rows="5"
        id="message"
        v-model.trim="message"
      ></textarea>
    </div>
    <p class="errors font-bold text-red-500" v-if="!formIsValid">
      Please enter a valid email and non-empty message.
    </p>
    <div class="actions text-center mt-6">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,
    };
  },
};
</script>
