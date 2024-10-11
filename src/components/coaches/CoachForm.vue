<template>
  <form @submit.prevent="submitForm" class="flex flex-col space-y-3">
    <div class="mt-4" :class="{ invalid: !firstName.isValid }">
      <label class="font-bold block mb-2" for="firstname">First Name</label>
      <input
        type="text"
        class="block w-full border pl-1 border-[#ccc] focus:bg-[#f0e6fd] focus:outline-none focus:border-[#3d008d]"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid" class="text-red-500">
        Firstname must not be empty.
      </p>
    </div>
    <div :class="{ invalid: !lastName.isValid }">
      <label class="font-bold block mb-2" for="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        class="block w-full border pl-1 border-[#ccc] focus:bg-[#f0e6fd] focus:outline-none focus:border-[#3d008d]"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid" class="text-red-500">
        Lastname must not be empty.
      </p>
    </div>
    <div
      class="form-control my-2 mx-0"
      :class="{ invalid: !description.isValid }"
    >
      <label class="font-bold block mb-2" for="description">Description</label>
      <textarea
        id="description"
        class="block w-full border pl-1 border-[#ccc] focus:bg-[#f0e6fd] focus:outline-none focus:border-[#3d008d]"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid" class="text-red-500">
        Description must not be empty.
      </p>
    </div>
    <div :class="{ invalid: !rate.isValid }">
      <label class="font-bold block mb-2" for="rate">Hourly Rate</label>
      <input
        type="number"
        class="block pl-1 w-30 border border-[#ccc]"
        id="rate"
        v-model.number="rate.val"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rate.isValid" class="text-red-500">
        Rate must be greater than 0.
      </p>
    </div>
    <div class="flex flex-col space-y-2" :class="{ invalid: !areas.isValid }">
      <h3 class="mb-0 mx-0 text-lg font-medium">Areas of Expertise</h3>
      <div class="ml-2 flex items-center">
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          class="inline border-none"
          @blur="clearValidity('areas')"
        />
        <label class="font-normal my-0 mr-0 ml-2 cursor-pointer" for="frontend"
          >Frontend Development</label
        >
      </div>
      <div class="ml-2 flex items-center">
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label class="font-normal my-0 mr-0 ml-2 cursor-pointer" for="backend"
          >Backend Development</label
        >
      </div>
      <div class="ml-2 flex items-center">
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label class="font-normal my-0 mr-0 ml-2 cursor-pointer" for="career"
          >Career Advisory</label
        >
      </div>
      <p v-if="!areas.isValid" class="text-red-500">
        At least one expertise must be selected.
      </p>
    </div>
    <p v-if="!formIsValid" class="text-red-500">
      Please fix the above errors and submit again.
    </p>
    <base-button class="mt-3">Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
