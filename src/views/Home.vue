<template>
  <div class="home">
    <h1 class="home-title">Todos here</h1>
    <h5 class="create-todo"></h5>
    <div class="add-todo-form">
      <input type="text" placeholder="Name your todo" v-model="text" />
      <button type="button" @click="addTodo">Add todo</button>
    </div>
    <ul class="todo-list">
      <h5 class="all-todos">
        All todos <b style="color: #42b983">({{ todos.length }})</b>
      </h5>
      <small
        >(click <i style="color: #42b983">true</i> or
        <i style="color: #42b983">false</i> to change todo)</small
      >
      <li v-for="todo in todos" :key="todo.id">
        <b class="list-id">{{ todo.id }}</b>
        <p class="list=text">{{ todo.text }}</p>
        <b
          @click="changeTodo(todo.id)"
          class="list-done"
          style="cursor: pointer"
          >{{ todo.done }}</b
        >
        <button type="button" @click="deleteTodo(todo.id)">Delete</button>
      </li>
      <br />
      <h5 class="doneTodos">
        Done Todos <b style="color: #42b983">({{ doneTodosCount }})</b>
      </h5>
      <li v-for="doneTodo in doneTodos" :key="doneTodo.id">
        <b class="list-id">{{ doneTodo.id }}</b>
        <p class="list=text">{{ doneTodo.text }}</p>
        <b class="list-done">{{ doneTodo.done }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      todos: this.$store.state.todos,
      text: "",
      done: false,
    };
  },
  computed: mapGetters(["doneTodos", "doneTodosCount"]),
  methods: {
    deleteTodo(id) {
      this.$store.commit("deleteTodo", id);
    },
    addTodo() {
      let { text, done } = this;
      let id = this.$store.getters.getTodosLength + 1;
      this.$store.commit("addTodo", { text, id, done });
      console.log(this.$store.state.todos.length);
    },
    changeTodo(id) {
      this.$store.commit("changeTodo", id);
    },
  },
};
</script>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 400px;
  padding: 0;
}

.todo-list li {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #f3f3f3;
  border: 1px solid #ccc;
  padding: 0 20px;
}
</style>
