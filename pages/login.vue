<template>
  <div class="content">
    <div class="card rounded-md shadow-lg">
      <h1>Login</h1>
      <form @submit.prevent="logIn">
        <div class="flex flex-col text-start text-md gap-5">
          <div class="flex flex-col">
            <label for="uName">Username </label>
            <input
              v-model="login.username"
              class="h-12 border-2 border-gray-200 rounded-md px-5"
              type="text"
              required
            />
          </div>
          <div class="flex flex-col">
            <label for="pass">Password </label>
            <input
              v-model="login.password"
              class="h-12 border-2 border-gray-200 rounded-md px-5"
              type="password"
              required
            />
          </div>

          <div>
            <button
              class="hover:bg-green-700 bg-green-500 px-4 py-2 rounded-md text-white w-full h-12 mt-5"
              type="submit"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
definePageMeta({
  layout: "clean",
});
export default {
  data() {
    return {
      login: { username: "kminchelle", password: "0lelplR" },
    };
  },
  methods: {
    async logIn() {
      console.log("test submit button");
      const login = await axios
        .post("https://dummyjson.com/auth/login", this.login)
        .then((res) => {
          console.log(res.data);
          let user = res.data;
          localStorage.setItem("user", JSON.stringify(user));

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully !!",
            // text: "Successful !",
            showConfirmButton: false,
            iconColor: "limegreen",
            width: 600,
            padding: "3em",
            timer: 1500,
          });
          setTimeout(() => {
            this.$router.replace("/");
          }, 1800);
        })
        .catch((error) => {
          console.error("Error:", error);
          this.errors.push(error.response.data.message);
        });
      return login;
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f3f6f6;
}
.content {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f6f6;
}
.card {
  background-color: #ffffff;
  width: 34vw;
  padding: 3.5rem 2rem;
  /* border-radius: 10px; */
  text-align: center;
}
h1 {
  font-size: 24px;
  padding-bottom: 1.5rem;
}
</style>
