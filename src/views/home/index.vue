<template>
  <div class='homeBox'>
    <el-row>
      <el-col :span="24">
        <div class="index-h4">
          <el-carousel
            :interval="4000"
            type="card"
            height="220px"
          >
            <el-carousel-item
              v-for="(item, index) in arrObj"
              :key="index"
              @click.native="goNote(item)"
            >
              <img
                :src="item.url"
                :title="item.name"
                class="carousel-image"
              >
            </el-carousel-item>
          </el-carousel>
          <h4>做的到和做不到，其实只是一念之间</h4>
          <p>Can do it and can't do it. It's just a thought</p>
        </div>
        <div class="box2">
          <h3>个人简介</h3>
          <p class="box2-p"> 2020毕业于广州科技职业学院，专业是电气自动化在校第三年在威凯实习，毕业后在游戏行业呆了将近两年，后因个人价值提升问题决定辞职自学前端，选择自学是想确定自己是否能坚持学习而非一时热血，
            看着B站的视频学了小半年熟悉了html,css还有javascript,了解了node、es6、git,也用vue跟element-ui做了些小项目,最近在学uniApp跟uniCloud想做个前后端一体的点餐小程序。
          </p>
          <div class="phone">
            <span>联系方式: </span>
            <el-tooltip
              content="chdx239239"
              placement="top"
            ><img src="./wx.jpg"></el-tooltip>
          </div>
        </div>
        <div class="box3">
          <div></div>
        </div>
        <div class="box4">
          <h3>记录</h3>
          <hr class="box4-hr">
        </div>
        <div class="box5">
          <div class="box5-1">
            <el-row>
              <el-col
                :span="24"
                class="box5-1-1"
              >
                <el-card
                  v-for="(item,index) in arrObj"
                  :key="index"
                  :body-style="{ padding: '10px' }"
                  @click.native="goNote(item)"
                >
                  <img
                    :src="item.url"
                    class="image"
                  >
                  <hr>
                  <div style="padding: 14px 120px 0 0;">
                    <span style="color:skyblue;font-size:18px">{{item.label}}</span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      arrObj: [
        {
          name: "js",
          url: "https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=600",
          label: "javaScript",
        },
        {
          name: "vue2.0",
          url: "https://images.pexels.com/photos/159533/kid-notebook-computer-learns-159533.jpeg?auto=compress&cs=tinysrgb&w=600",
          label: "vue2.0",
        },
        {
          name: "ts",
          url: "https://images.pexels.com/photos/912388/pexels-photo-912388.jpeg?auto=compress&cs=tinysrgb&w=600",
          label: "TypeScript",
        },
        {
          name: "nodejs",
          url: "https://images.pexels.com/photos/1240532/pexels-photo-1240532.jpeg?auto=compress&cs=tinysrgb&w=600",
          label: "Node.js",
        },
        {
          name: "uniApp",
          url: "https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=600",
          label: "uniApp",
        },
      ],
    };
  },
  methods: {
    goNote(item) {
      this.$router.push({
        name: item.name,
      });
    },
  },
};
</script>
<style scope>
@import "./index.css";
</style>
