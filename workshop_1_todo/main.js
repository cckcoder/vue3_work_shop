const app = Vue.createApp({
  data() {
    return {
      todo: '',
      todos: []
    }
  },
  methods: {
    submitTodo() {
      this.todos.push(this.todo)
    }
  }
}).mount('#app')
