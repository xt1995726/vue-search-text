<template>
  <div class="content-box">
    <!-- 顶部搜索框 -->
    <div class="topbar">
      <a href="https://www.zhangmen.com" target="_blank">
        <img src="http://index.zmops.cc/img/zlearn-logo.png" height="40" width="105">
      </a>
      <div class="component-search">
        <search></search>
      </div>
    </div>

    <!-- 搜索内容 -->
    <div class="content">
      <div class="card-wrap">
        <el-card class="box-card" v-for="item in 10" :key="item">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">有效</el-button>
            <el-button style="float: right; padding: 3px 0" type="text">无效</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </div>

  </div>
</template>
<script>
import Search from './Search'
export default {
  components: {
    Search,
  }
}
</script>
<style>
.content-box {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  /* background-color: black; */
}
.topbar {
  position: relative;
  height: 50px;
  background-color: #fff;
  padding-right: 20px;
  box-shadow: 0 3px 3px #ddd;
}
.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}
.topbar > a > img {
  margin: 5px 10px;
  float: left;
}
.component-search {
  display: inline-block;
  margin: 6px 10px 4px;
}
.card-wrap {
  margin-left: 125px;
}
.box-card {
  width: 900px;
  margin-top: 30px;
  background-color: rgba(238, 238, 238, 0.9);
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
