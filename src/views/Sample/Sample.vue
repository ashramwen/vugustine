<template>
  <div>{{ count }}</div>
  <button @click="doSomething">doSomething</button>
</template>

<script>
export default {
  setup() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    doSomething() {
      this.$store.commit('increment');
    },
  },
};
</script>

<style lang="scss" scoped></style>
