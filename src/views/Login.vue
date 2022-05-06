<template>
  <div>login</div>
</template>

<script>
export default {
  name: 'login',
  mounted() {
    // this.$request({
    //   method: 'get',
    //   data: {
    //     name: 'jack'
    //   },
    //   url: '/login'
    // }).then((res) => {
    //   console.log(res)
    // })
    this.$request.get('/login', { name: 'jack' }).then((res) => {
      console.log(res)
    })
  }
}
</script>
<style></style>
