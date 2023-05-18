<template>
  <main class="screen-bg">
   <!-- 头部 -->
   <div class="header"></div>
   <!-- 左边 -->
   <div class="left-top">

    <PieCharts  :echartDatas="powerData.chargingPile.data"/>
   </div>
    <div class="left-bottom">
      <lineEcharts :echartDatas="powerData.processMonitoring.data "/>
    </div>
    <!-- 右边 -->
    <div class="right-top"></div>
      <div class="right-center"></div>
      <div class="right-bottom"></div>
<!-- 中间 -->
       
        <div class="center">
          
        </div>
        <div class="bottom">
            <bottomPanel :panelItems="powerData.dataAnalysis.data" />
        </div>
  </main>
</template>

<script setup>
import {ref} from "vue";
import PieCharts from "@/components/pie-charts.vue";
import lineEcharts from "@/components/line-echarts.vue";
import bottomPanel from "@/components/bottom-panel.vue"
import { getPowerScreenData } from "../services";
import defaultHomeData from "./config/default-home-data.json";
let powerData = ref(defaultHomeData);
// 发起网络请求
getPowerScreenData().then((res) => {
  powerData.value = res.data;
});
</script>

<style lang="scss" scoped>

.screen-bg{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/bg.png');
.header {
  /* 定位 */
  position: absolute;
  top: 21px;
  height: 56px;
  width: 100%;
    
  /* 背景 */
  background-image: url(../assets/images/bg_header.svg);
  background-repeat: no-repeat;
}

.left-top {
  /* 定位 */
  position: absolute;
  left: 16px;
  top: 116px;
  width: 536px;
  height: 443px;
    
  /* 背景 */
  background-image: url(../assets/images/bg_left-top.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.left-bottom {
  /* 定位 */
  position: absolute;
  left: 16px;
  bottom: 49px;
  width: 536px;
  height: 443px;
    
  /* 背景 */
  background-image: url(../assets/images/bg_left_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}




.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;
    
  background-image: url(../assets/images/bg_right_top.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_center.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(../assets/images/bg_right_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.center {
  position: absolute;
  right: 540px;
  bottom: 272px;
  width: 823px;
  height: 710px;
    
  border: 5px solid pink;
}

.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;
    
  background-image: url(../assets/images/bg_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
}

</style>