<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$storage.setItem('name', '当黄')
    this.$storage.setItem('age', '12')
    console.log(this.$storage.getItem('name'))
    this.$storage.deleteItem('age')
    this.$storage.clearAll()
  }
}
</script>

<style></style>
