<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  async mounted() {
    const api = await this.$api();
    api.api.petstore.store.getInventory.request().then((res) => {
      console.log("res: ", res);
      return res;
    });
    const url = api.api.petstore.store.getInventory.getUrl();
    console.log("url: ", url);
  },
};
</script>
