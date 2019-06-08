<template>
  <p>Hello, {{ name }}</p>
</template>

<style scoped>
p {
  color: red;
  font-weight: 700;
}
</style>

<script>
export default {
  data: function() {
    return {
      name: "World!!!"
    };
  }
};
</script>