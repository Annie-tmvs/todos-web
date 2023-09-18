<template>
  <div>
    <nav>
      <label class="name-stl"><a href="/">Simple Todo App</a></label>
      <ul>
        <li>
          <button
            class="hover:bg-green-600 bg-green-700 px-4 py-2 rounded-md"
            @click="Logout"
          >
            Log out
          </button>
        </li>
      </ul>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  methods: {
    Logout() {
      // localStorage.clear();
      // this.$router.push("/login");
      // window.location.reload();
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to logout !!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#26b63b",
        cancelButtonColor: "#db2323",
        iconColor: "#ffa334",
        width: 600,
        // padding: "3em",
        position: "center",
      }).then(async (result) => {
        if (result.isConfirmed) {
          localStorage.clear();

          setTimeout(() => {
            this.$router.push("/login");
          }, 1800);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 1800);
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
        }
      });
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
}
body {
  padding: 0;
  margin: 0;
}
nav {
  background-color: rgb(34 197 94);
  height: 70px;
  padding: 0 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav > ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
nav > ul > li {
  float: left;
  color: white;
  font-size: 16px;
}
/* nav > ul > li > button {
 
} */
.name-stl {
  font-size: 20px;
  color: white;
}
</style>
