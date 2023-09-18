<template>
  <spinner v-if="!item" />
  <div v-else class="content">
    <div class="card shadow-lg rounded-md px-5 py-5 text-start">
      <p>{{ item.todo }}</p>
      <p>status: {{ item.completed }}</p>
      <div>
        <button
          v-if="item.completed == false"
          class="focus:bg-gray-500 hover:bg-green-700 bg-green-500 px-4 py-2 rounded-md text-white h-12 mt-5"
          @click="toggleCompleted"
        >
          <p class="uppercase">COMPLETED</p>
        </button>
        <button
          v-else
          class="focus:bg-gray-500 hover:bg-red-700 bg-red-500 px-4 py-2 rounded-md text-white h-12 mt-5"
          @click="toggleCompleted"
        >
          <p class="uppercase">NOT COMPLETED</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import Spinner from "~/components/Spinner.vue";
export default {
  components: { Spinner },
  data() {
    return {
      item: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.fetchTodo();
    }, 800);
  },
  methods: {
    fetchTodo() {
      axios
        .get(`https://dummyjson.com/todos/${this.$route.query.id}`)
        .then((res) => {
          this.item = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    toggleCompleted() {
      const formData = new FormData();
      formData.append("_method", "put");

      // Toggle the completed status
      formData.append("completed", !this.item.completed);

      axios
        .put(`https://dummyjson.com/todos/${this.item.id}`, formData)
        .then((res) => {
          // Update status
          this.item.completed = !this.item.completed;
          // alert("successfully !!");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully !!",
            text: "Item was updated successfully",
            showConfirmButton: true,
            confirmButtonColor: "rgb(29 78 216)",
            iconColor: "limegreen",
            width: 600,
            padding: "1rem 0",
            // timer: 1500,
          });
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
}
.card {
  padding: 1.5rem 1rem;
  width: 400px;
  background-color: #fff;
}
</style>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
}
.card {
  padding: 1.5rem 1rem;
  width: 400px;
  background-color: #fff;
}
</style>
