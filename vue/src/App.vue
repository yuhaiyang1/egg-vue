<template>
<div class="container" id="app">
  <transition name="fade">
    <keep-alive>
      <el-container v-if='user.userInfo.id'
        style="height: 100%; border: 1px solid #eee"
        >
        <el-header>
          <el-menu
            mode="horizontal"
            default-active="2"
            @open="handleOpen"
            @close="handleClose"
            background-color="#fff"
            text-color="rgba(0,0,0,.65)"
            active-text-color="#1890ff">
            <el-menu-item index="1">
              <i class="el-icon-info"></i>
              <span slot="title">院线热映</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">Top250</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
          <div class="app-right">
            <el-dropdown  @command="handleCommand">
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{user.userInfo.name}}</span>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <div v-else>
        <router-view></router-view>
      </div>
    </keep-alive>
  </transition>
</div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.el-header {
  color: #333;
  line-height: 60px;
  text-align: right;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}

.el-aside {
  color: #333;
}
.el-menu {
  height: 100%;
}
.app-right {
  width: 200px;
}
</style>
<script>
  import { mapState, mapMutations } from 'vuex'
  import { logout } from 'service'
    export default {
      computed: mapState([
        'user'
      ]),
      data() {
        const item = {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
          tableData: Array(20).fill(item)
        }
      },
      methods: {
         async handleCommand(command) {
          if (command === 'logout') {
            // 先发请求
            const res = await logout()
            if (res) {
             this.logout()
            }
             this.$router.push('login')
          }
        },
        ...mapMutations([
          'logout'
        ])
      }
    };
</script>

