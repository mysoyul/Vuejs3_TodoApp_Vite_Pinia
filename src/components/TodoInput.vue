<template>
  <div class="inputBox shadow">
    <input
      type="text"
      :value="newTodoItem"
      @input="handleInput"
      @keyup.enter="addTodo"
      ref="myinput"
    />
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <MyModal :show="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3>
          경고!
          <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
        </h3>
      </template>
      <template v-slot:body>
        <div>아무것도 입력하지 않으셨습니다.</div>
      </template>
    </MyModal>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import MyModal from './common/MyModal.vue'
import { useTodoStore } from '@/stores/useTodoStore'

const store = useTodoStore()

const showModal = ref(false)
const newTodoItem = ref('')
const myinput = ref(null)
const emit = defineEmits(['input:todo'])

onMounted(() => {
  myinput.value.focus()
})

const handleInput = (event) => {
  const todoText = event.target.value
  if (!todoText) return
  //"input:todo" 이벤트 생성
  emit('input:todo', todoText)
  newTodoItem.value = todoText
}

const addTodo = () => {
  const todoItemStr = newTodoItem.value
  if (todoItemStr !== '') {
    const todoItemObj = { completed: false, item: todoItemStr }
    store.addTodo(todoItemObj)
    clearInput()
  } else {
    showModal.value = !showModal.value
  }
} //addTodo

const clearInput = () => {
  newTodoItem.value = ''
}
</script>

<style scoped>
i,
span {
  cursor: pointer;
}

input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  width: 80%;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  color: #42b983;
}
</style>
