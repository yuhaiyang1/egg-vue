<template>
  <div id='login' v-if='!user.userInfo.id'>
    <el-form :model="loginForm" :rules="rules" ref="loginForm" laclass="demo-ruleForm" label-width='60px'>
    <img src='http://img2.3png.com/379818c5618cdbd8aa17c4c351de602e4cc9.png' class="login-logo"/>
    <el-form-item label="账号" prop="name">
      <el-input type="text" v-model="loginForm.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="loginForm.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
      <el-button @click="resetForm('loginForm')">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
  <div v-else>
    1
    <h1>{{user.userInfo.id}}</h1>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { login } from 'service'
  export default {
    computed: mapState([
      'user'
    ]),
    data() {
      console.log(this.user, '11')
      return {
        loginForm: {
          name: '',
          password: '',
          identity: '',
          id: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入名字', trigger: 'change' },
            ],
          password: [ { required: true, message: '请输入密码', trigger: 'change' } ]
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate( async (valid) => {
          if (valid) {
           const res = await login(this.loginForm)
            const { name, _id } = res 
            this.login({ name, id: _id })
            this.$router.push('home')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       ...mapMutations([
         'login'
       ])
    }
  }
</script>
<style>
  #login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #login .demo-ruleForm {
    width: 40%;
    margin: 10%;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
  }
  .login-logo {
    width: 20%;
    border-radius: 100%;
  }
</style>
