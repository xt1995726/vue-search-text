<template>
  <div class="search-wrap">
    <div class="search-input">
      <input type="text" v-model="keyword">
      <span class="search-reset" @click="reset">&times;</span>
      <button class="search-btn" @click="search">搜了个索</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    reset() {
      this.keyword = '';
    },
    search() {
      this.$router.push({
        path: '/result',
      });
    }
  },

}
</script>

<style scoped>
.search-input {
  width: 600px;
  position: relative;
}
.search-input input {
  border: 1px solid #aaaaaa;
  background: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  width: 500px;
  height: 40px;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
  overflow: hidden;
}
.search-reset {
  position: absolute;
  right: 115px;
  top: 10px;
  cursor: pointer;
}
.search-btn {
  display: inline-block;
  height: 40px;
  width: 100px;
  border: 1px solid rgba(200, 20, 50, 0.8);
  background-color: rgba(200, 20, 50, 0.8);
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  float: right;
}
</style>
