<template>
  <div>
    <!-- The Basic Auto Layout -->
    <!-- <div class="grid">
      <div class="col">
        <div>Auto Column</div>
      </div>
      <div class="col">
        <div>Auto Column</div>
      </div>
      <div class="col">
        <div>Auto Column</div>
      </div>
    </div>-->
    <!-- No Gutters -->
    <!-- <div class="grid grid-nogutter">
      <div class="col">
        <div>Auto Column</div>
      </div>
      <div class="col">
        <div>Auto Column</div>
      </div>
      <div class="col">
        <div>Auto Column</div>
      </div>
    </div>-->
    <!-- Percentage Based Columns -->
    <!-- <div class="grid grid-nogutter">
      <div class="col col-3">
        <div>25% (3/12)5% (3/12)5% (3/12)5% (3/12)5% (3/12)5% (3/12)5% (3/12)5% (3/12)5% (3/12)</div>
      </div>
      <div class="col col-9">
        <div>75% (9/12)</div>
      </div>
    </div>-->
    <!-- Flex Grow Columns -->
    <!-- <div class="grid">
      <div class="col col-grow-3">
        <div>Grow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 ColumnsGrow 3 Columns</div>
      </div>
      <div class="col">
        <div>Auto ColumnAuto </div>
      </div>
    </div>-->
    <!-- Fixed Columns -->
    <!-- <div class="grid">
      <div class="col col-fixed" style="width:168px;"><div>
          col col-fixed</div></div>
      <div class="col"><div>
          col</div></div>
      <div class="col"><div>
          col</div></div>
    </div>-->
    <!-- Mixed Columns -->
    <!-- <div class="grid">
      <div class="col col-fixed" style="width:150px;"><div>
          Fixed Column</div></div>
      <div class="col col-grow-2"><div>
          Grow</div></div>
      <div class="col"><div>
          Aun</div></div>
      <div class="col col-3"><div>
          25% (3/12)</div></div>
    </div>-->
    <!-- <div class="grid">
      <div class="col col-top" style="height:96px;">
        <div>Content aligned to top</div>
      </div>
      <div class="col col-middle" style="height:96px;">
        <div>Content aligned to middle</div>
      </div>
      <div class="col col-bottom" style="height:96px;">
        <div>Content aligned to bottom</div>
      </div>
    </div>-->
    <!-- 上下左右垂直居中 -->
    <div class="grid grid-center" style="height:112px;">
      <!-- <div class="col col-align-top">
        <div>Top Aligned Column</div>
      </div> -->
      <div class=" col-align-middle " style="width:168px;">
        <div>Middle Aligned Column</div>
      </div>
      <!-- <div class="col col-align-bottom">
        <div>Bottom Aligned Column</div>
      </div> -->
      <!-- <div class="col" >Tall Column</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.grid {
  .col:nth-of-type(even),.col-align-middle {
    div {
      background: khaki;
    }
  }

  .col:nth-of-type(odd),.col-align-middle {
    div {
      background: indianred;
    }
  }
}
</style>
