<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
import { useTodoStore } from '@/stores/useTodoStore'

export default {
  setup() {
    const store = useTodoStore()

    const clearTodo = () => {
      store.clearTodo()
    }

    return {
      clearTodo
    }
  }
}
</script>

<style scoped>
span {
  cursor: pointer;
}

.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
