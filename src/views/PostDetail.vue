<template>
  <div>
    <div v-if="post" class="row mt-4">
      <h4 class="text-center">View Post</h4>
      <div class="mx-auto" style="width: 500px">
        <h5>[ID: {{ post.id }}]</h5>
        <div>
          <label><strong>Email:</strong></label> {{ post.email }}
        </div>
        <div>
          <label><strong>Title:</strong></label> {{ post.title }}
        </div>
      </div>
      <div class="mt-4 text-center">
        <button class="btn btn-danger" v-on:click="removePost(post.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostListStore } from '@/stores/usePostStore'

const router = useRouter()
const route = useRoute()
const store = usePostListStore()

const { post } = storeToRefs(store)

onBeforeMount(() => {
  fetchData()
})

const removePost = (id) => {
  store.removePost(id)
  router.push('/posts')
}
const fetchData = () => {
  if (route.params.id) {
    store.loadPost(+route.params.id)
  }
}

// route.params.id 값이 변경되는 것을 watch 한다
watch(() => route.params.id, fetchData)
</script>

<style scoped>
button {
  margin: 1rem 0;
}
</style>
