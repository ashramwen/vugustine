<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts">
export default {
  name: 'About',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
