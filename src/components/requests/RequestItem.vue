<template>
  <li class="my-4 mx-0 border border-[#ccc] p-4">
    <div>
      <a
        class="text-[#3d008d] font-bold hover:text-[#8d007a] active:text-[#8d007a]"
        :href="emailLink"
        >{{ email }}</a
      >
    </div>
    <p class="mt-2 mx-0 mb-0">{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ['email', 'message'],
  computed: {
    emailLink() {
      return 'mailto:' + this.email;
    },
  },
};
</script>
