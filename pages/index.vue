<template>
  <spinner v-if="!todos" />
  <!-- main code  -->
  <div v-else class="cont">
    <p class="text-2xl py-3">Todo list</p>
    <hr class="my-3" />
    <div class="cont-list py-3 grid grid-cols-4 gap-4">
      <card-list v-for="(item, i) in todos" :key="i.id" :item="item" />
    </div>
    <div class="pagination flex items-end justify-center my-10">
      <div>
        <span>Current page: {{ currentPage }}</span>
      </div>
      <div class="w-fit m-auto flex gap-4">
        <a
          href="?page=1&skip=0"
          class="bg-green-500 focus:bg-slate-300 hover:bg-green-600 p-4 rounded-md text-white transition-all duration-300 block w-fit"
          >1</a
        ><a
          href="?page=2&skip=30"
          class="bg-green-500 focus:bg-slate-300 hover:bg-green-600 p-4 rounded-md text-white transition-all duration-300 block w-fit"
          >2</a
        ><a
          href="?page=3&skip=60"
          class="bg-green-500 focus:bg-slate-300 hover:bg-green-600 p-4 rounded-md text-white transition-all duration-300 block w-fit"
          >3</a
        ><a
          href="?page=4&skip=90"
          class="bg-green-500 focus:bg-slate-300 hover:bg-green-600 p-4 rounded-md text-white transition-all duration-300 block w-fit"
          >4</a
        ><a
          href="?page=5&skip=120"
          class="bg-green-500 focus:bg-slate-300 hover:bg-green-600 p-4 rounded-md text-white transition-all duration-300 block w-fit"
          >5</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CardList from "~/components/CardList.vue";
export default {
  components: { CardList },
  data() {
    return {
      todos: "",
      skip: "",
      currentPage: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.fetchTodo();
    }, 700);
    this.pageNumber();
  },
  methods: {
    fetchTodo() {
      this.skip = parseInt(this.$route.query.skip) || 0;
      const token = localStorage.getItem("user");
      if (token) {
        axios
          .get("https://dummyjson.com/todos?limit=30&skip=" + this.skip)
          .then((res) => {
            this.todos = res.data.todos;
          });
      } else {
        this.$router.push("/login");
      }
    },
    pageNumber() {
      this.currentPage = parseInt(this.$route.query.page) || 1;
    },
  },
};
</script>
<style>
body {
  background-color: #f3f6f6;
}
.cont {
  margin: 4rem 6rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: #ffffff;
  /* height: 470px; */
}
</style>
