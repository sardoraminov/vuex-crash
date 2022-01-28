import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, text: "Learn Vue", done: true },
      { id: 2, text: "Learn Vuex", done: true },
      { id: 3, text: "Learn Vue Router", done: true },
      { id: 4, text: "Learn Svelte", done: false },
      { id: 5, text: "Learn Python", done: false },
    ],
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodosById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
    getTodosLength(state) {
      return state.todos.length;
    },
  },
  mutations: {
    deleteTodo(state, id) {
      let foundedTodoIndex = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(foundedTodoIndex, 1);
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    changeTodo(state, id) {
      let foundedTodoIndex = state.todos.findIndex((todo) => todo.id === id);
      state.todos[foundedTodoIndex].done = !state.todos[foundedTodoIndex].done;
    },
  },
  actions: {},
  modules: {},
});
