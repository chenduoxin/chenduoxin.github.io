<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="#fff"
      active-text-color="#fff"
    >
      <span class="title">Personal blog</span>
      <el-menu-item
        v-for="item in menu"
        :index='item.path'
        :key="item.path"
        @click="go(item)"
      >{{item.label}}</el-menu-item>
      <el-dropdown
        trigger="click"
        @command="loginOut"
      >
        <span><img
            src="./user.jpeg"
            class="herder-img"
          ><i
            id="herder-icon"
            class="el-icon-caret-bottom"
          ></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: "ComHerder",
  data() {
    return {
      menu: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          url: "views/index",
        },
        {
          path: "/study",
          name: "study",
          label: "导航",
          url: "views/study",
        },
      ],
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    //菜单跳转
    go(item) {
      this.$router.push({
        name: item.name,
      });
    },
    loginOut(command) {
      if (command === "a") {
        //清除登录的token和菜单路由
        this.$store.commit("clearToken");
        //刷新浏览器
        location.reload();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  color: #fff;
  float: left;
  margin-left: 40px;
}
.el-menu-demo {
  background-color: rgb(0, 0, 0, 0.1);
  width: 100%;
}
.el-menu-item:hover {
  background: #333 !important;
}
.el-menu--horizontal > .el-menu-item.is-active {
  background-color: #333 !important;
}
.el-menu-item {
  margin-left: 40px;
  font-size: 17px;
  font-weight: 500;
}
.herder-img {
  width: 45px;
  top: 10px;
  right: 40px;
  border-radius: 50%;
}
.el-dropdown {
  position: absolute;
  right: 40px;
  top: 10px;
  height: 40px;
}
#herder-icon {
  position: absolute;
  top: 20px;
  color: rgb(54, 99, 196);
}
</style>