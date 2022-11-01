<template>
  <div class="js-box">
    <el-container>
      <el-aside
        width="250px"
        style="background-color: #fff"
      >
        <com-javascript></com-javascript>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ComJavascript from "../../components/jsAside/jsAside.vue";
export default {
  components: { ComJavascript },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.js-box {
  height: 80%;
  background-color: #fff;
}
.el-container, .el-main{
  height: 100%;
}
.el-aside {
  border-right: 1px solid #ccc;
}
</style>