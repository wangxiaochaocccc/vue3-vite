<template>
  <div class="login">
    <el-form class="login-form">
      <div class="title">火星</div>
      <el-form-item>
        <el-input :prefix-icon="User"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input :prefix-icon="View" show-password type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { User, View } from '@element-plus/icons-vue'
</script>
<style lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background-color: #f9fcff;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-form {
    width: 500px;
    padding: 50px;
    border-radius: 4px;
    box-shadow: 0 0 10px 3px #c7c9cb4d;
    box-sizing: border-box;

    .title {
      font-size: 50px;
      line-height: 1.5;
      font-weight: bold;
      text-align: center;
      margin-bottom: 15px;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>
