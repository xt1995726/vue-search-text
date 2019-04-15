<template>
  <div class="search-wrap">
    <div class="search-input">
      <input type="text" v-model="keyword">
      <span class="search-reset" @click="reset">&times;</span>
      <button class="search-btn">搜了个索</button>
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

    }
  },

}
</script>

<style scoped>
.search-wrap {
  margin-top: 70px;
}
.search-input {
  width: 600px;
  margin: 30px auto;
  position: relative;
}
.search-input input {
  border: 1px solid #e4e4e4;
  background: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  width: 500px;
  height: 45px;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
  overflow: hidden;
}
.search-reset {
  position: absolute;
  right: 120px;
  top: 12px;
  cursor: pointer;
}
</style>
