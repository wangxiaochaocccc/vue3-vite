<template>
  <div class="basic-layout">
    <div class="nav-side"></div>
    <div class="content-right">
      <div class="common-top"></div>
      <div class="change-wrapper">
        <div class="wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
  }
  .content-right {
    margin-left: 200px;
    .common-top {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ddd;
    }
    .change-wrapper {
      height: calc(100vh - 50px);
      background-color: #eef0f3;
      padding: 20px;
      box-sizing: border-box;
      .wrapper {
        height: 100%;
        background-color: #fff;
      }
    }
  }
}
</style>
