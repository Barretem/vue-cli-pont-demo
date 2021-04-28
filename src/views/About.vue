<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$api.petstore.store.getInventory.request().then((res) => {
      console.log("res: ", res);
    });
    const url = this.$api.petstore.store.getInventory.getUrl();
    console.log("url: ", url);
  },
}
</script>
