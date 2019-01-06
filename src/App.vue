<template>
  <div id="app" ref="app">
    <transition :enter-active-class="$route.meta.animation">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Loading, TransferDom } from "vux";
import { mapState } from "vuex";

export default {
  directives: {
    TransferDom
  },
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  },
  created() {}
};
</script>

<style lang="less">
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background: #ffffff;
}
</style>
