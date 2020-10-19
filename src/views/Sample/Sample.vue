<template>
<div>{{ count }}</div>
<div>{{ anotherCount }}</div>
<button @click="doSomething">doSomething</button>
</template>

<script>
export default {
  setup(props, context) {
    return {};
  },
  data() {
    return {
      anotherCount: this.$store.state.count,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    doSomething() {
      this.$store.commit('increment');
      this.anotherCount++;
    },
  },
};
</script>

<style lang="scss" scoped></style>
