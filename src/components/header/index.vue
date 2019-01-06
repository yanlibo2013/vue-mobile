<template>
  <div class="v-header">
    <img src="../../assets/arrow/left-arrow.svg" alt @click="showHeader()">
    <div>国民超级年仅限国民超级年仅限</div>
    <img src="../../assets/arrow/more.svg">
  </div>
</template>

<script>
import {
  setSession,
  getSession,
  remvoeSession,
  clearAllSession
} from "@/utils/utils";
export default {
  data: function() {
    return {};
  },
  methods: {
    showHeader(val) {
      console.log("showHeader");
      //setSession({ key: "token", value: "henry" });
      // remvoeSession({key:"token"});
      // let tokenk = getSession({ key: "token" });
      // console.log(tokenk);
    }
  },
  mounted() {
    setSession({ key: "token", value: "ylb" });
    let tokenk = getSession({ key: "token" });
    console.log(tokenk);
  }
};
</script>

<style lang="less" scoped>
.v-header {
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  padding: 0 20px;
}
</style>
