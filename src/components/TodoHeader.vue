<template>
  <div>
    <header>
      <h1>TODO it! ({{ mode }})</h1>
    </header>
  </div>
</template>

<script>
export default {
  setup() {
    const mode = import.meta.env.VITE_TITLE
    return { mode }
  }
}
</script>

<style scoped>
h1 {
  color: #2f3852;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
