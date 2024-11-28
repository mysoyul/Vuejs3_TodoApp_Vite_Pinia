import { defineStore } from 'pinia'
import http from '@/common/http-common'
import axios from 'axios'

export const usePostListStore = defineStore('posts', {
  state: () => ({
    posts: [],
    post: { id: 0, email: '', title: '' },
    loadingStatus: false
  }),
  actions: {
    async loadPosts() {
      this.loadingStatus = true
      try {
        const res = await http.get('/posts')
        const data = await res.data
        this.posts = data
        this.loadingStatus = false
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error?.response?.status + ' : ' + error.message)
        } else {
          console.error(error)
        }
      }
    },
    async loadPost(id) {
      try {
        const res = await http.get(`/posts/${id}`)
        const data = await res.data
        this.post = data
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error?.response?.status + ' : ' + error.message)
        } else {
          console.error(error)
        }
      }
    },
    async removePost(id) {
      const res = await http.delete(`/posts/${id}`)
      const data = await res.data
      this.posts = data
    },
    async addPost(payload) {
      const res = await http.post(`/posts`, payload)
      const data = await res.data
      this.posts = data
    }
  }
})
