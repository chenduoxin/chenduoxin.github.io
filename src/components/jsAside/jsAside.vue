<template>
  <div>
    <el-menu>
      <el-submenu index="1">
        <h3 slot="title">JavaScript记录</h3>
        <el-menu-item
          v-for="(item, index) in jsEasy"
          :key="index"
          @click="goJs(item)"
        >{{item.label}}</el-menu-item>
      </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <h3 slot="title">JavaScript进阶</h3>
        <el-menu-item index="2-1">学习视频</el-menu-item>
        <el-menu-item index="2-2">。。。</el-menu-item>
        <el-menu-item index="2-3">。。。</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <h4 slot="title">其他</h4>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsEasy: [
        { path: "/jsTv", name: "jsTv", label: "数据类型，拷贝，this，闭包" },
        { path: "/jsBook", name: "jsBook", label: "原型链,继承" },
        { path: "/jsStudy", name: "jsStudy", label: "菜鸟教程" },
      ],
    };
  },
  methods: {
    goJs(item) {
      this.$router.push({
        name: item.name,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>