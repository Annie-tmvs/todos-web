<template>
  <div>
    <nuxt-link :to="`/list-detail?id=${item.id}`" @click="listId(item)"
      ><div class="card hover:shadow-md">
        <p v-if="item.completed == true" class="text-green-500 text-base">
          {{ item.id }}.
          {{ item.todo }}
        </p>
        <p v-else class="text-base">{{ item.id }}. {{ item.todo }}</p>
      </div></nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      detail: [],
    };
  },
  methods: {
    listId(id) {
      console.log("list id " + id);
    },
  },
};
</script>
<style scoped>
* {
  text-decoration: none;
}
.card {
  transition: 0.3s;
  border-radius: 5px;
  border: 1px solid rgb(234, 234, 234);
  height: 110px;
  padding: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
