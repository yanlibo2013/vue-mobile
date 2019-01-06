<template>
  <div>
    <vheader></vheader>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import vheader from "@/components/header/index.vue";
export default {
  name: "ak",
  components: {
    vheader
  },
  methods: {
    ...mapActions(["getProductInfo"]),
    initData() {
      this.$vux.loading.show({
        text: "加载中..."
      });

      let data = {
        userId: "6e6fcf4f572313ff7091972944dc77dc",
        currentPage: 1,
        pagesize: 10
      };

      this.$http.post2("100171", data).then(res => {
        this.$vux.loading.hide();

        if (res.data.head.errorCode === "0000") {
          const body = res.data.body;
          this.getProductInfo(body.rows);
        }
      });
    }
  },
  data: function() {
    return {};
  },

  mounted() {
    this.initData();
  }
};
</script>

<style lang="less" scoped>
</style>
