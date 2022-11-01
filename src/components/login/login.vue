<template>
  <div class="login-box">
    <h4 class="login-h4">用户登录</h4>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="form"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="用户"
        prop="username"
      >
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item class="login-button">
        <el-button
          type="primary"
          @click="submitForm()"
        >提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getMenu } from "../../api/data";
export default {
  data() {
    //表单校验
    var validateUser = (rule, value, callback) => {
      if (value != "admin") {
        callback(new Error("请输入admin"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value != "123456") {
        callback(new Error("请输入123456"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      getMenu(this.ruleForm).then(({ data: res }) => {
        if (res.code === 20000) {
          // 设置token
          this.$store.commit("setToken", res.data.token);
          // 页面跳转
          this.$router.push({ name: "home" });
        } else {
          this.$message.warning(res.data.message);
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.login-box {
  width: 360px;
  border: 1px solid #e4e4e4;
  border-radius: 20px;
  margin: 25vh 0 0 35vw;
}
.login-h4 {
  margin: 20px 0;
  font-size: 18px;
}
.el-input {
  display: block;
  width: 200px;
}
.login-button {
  margin-right: 100px;
}
</style>