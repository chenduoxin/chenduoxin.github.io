<template style="height:100%">
  <div style="height:100%">
    <el-container
      style="height:100%"
      class="container-box"
    >
      <div class="header-box">
        <el-header>
          <com-header></com-header>
        </el-header>
      </div>
      <el-main>
        <router-view
          id="v-content"
          v-bind:style="{minHeight:Height+'px'}"
        ></router-view>
        <el-backtop
          target=".el-main"
          :bottom="100"
        >up</el-backtop>
        <com-footer></com-footer>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ComHeader from "../header/herder.vue";
import ComFooter from "../footer/footer.vue";
export default {
  components: { ComHeader, ComFooter },
  data() {
    return {
      Height: 0,
    };
  },
  mounted() {
    //动态设置内容高度让footer始终沉底
    this.Height = document.documentElement.clientHeight - 161;
    //监听浏览器窗口变化
    window.onresize = () => {
      this.Height = document.documentElement.clientHeight - 161;
    };
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
  width: 100%;
}
.el-main {
  color: #333;
  text-align: center;
  background-image: url("../../assets/bg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 0;
}
.el-menu-demo el-menu--horizontal el-menu {
  border: none;
}
.header-box {
  height: 60px;
  background-color: #222222;
  position: relative;
}
.container-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>