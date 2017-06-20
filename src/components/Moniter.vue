<template>
  <div id="p_container">
    <div style="width:100%;height:100%;" id="container"></div>
    <div class="fence_big_label" id="info">
    </div>
  </div>
</template>
<script>
export default {
  name: 'map',
  data() {
    return {
      module: null,
    }
  },
  methods: {
    // 数据初始化
    argument_init: function() {
      // --------------------------------宏观模式的围栏
      // 收集围栏的所有的点---为了最优视角
      this.module.f_big_arr = [];
      // 宏观模式的循环时间
      this.module.f_big_timer = null;
      // 海星围栏的收集
      this.module.f_big_dom_arr = [];
      // 围栏最优一次
      this.module.f_view = true;
      // 宏观围栏mass的大小
      this.module.f_size = null;
      // mass加载 第一次进行加载，第二次注入数据
      this.module.f_first_load = true;
      this.module.f_small_timer = null;

      // ---------------------------------自行车
      // 海星的收集
      this.module.b_dom_arr = [];
      // 自行车的定时器
      this.module.b_timer = null;
      // 宏观围栏mass的大小
      this.module.b_size = null;
      // mass加载 第一次进行加载，第二次注入数据
      this.module.b_first_load = true;

      // ---------------------------------开关
      // fence 点击开关--没有点击
      this.module.f_mass_key = false;

      //这个参数证明围栏已经到了3-19级--即使发出请求也不进行打点
      this.module.f_wheel_key = false;

      // 微观数据启动标记---默认没有启动
      this.module.f_small_key = false;
    },
    // 清除所有的定时器
    // 该处是地图的模块写的不够完善不能进行更好的清除地图的定时器，和vue没有关系
    clear_init:function () {
      var me = this.module;
      clearTimeout(me.f_big_timer);
      clearTimeout(me.b_timer);
    },
  },
  // ------------------------------------
  mounted() {
    this.module = new diyBdMap({
      id: 'container'
    });
    this.argument_init();
    this.module.init();
  },
  beforeDestroy: function() {
    this.clear_init();
  },
}
</script>
<style lang="less">
#p_container {
  width: 100%;
  height: 100%;
  position: relative;
}


/*----------------------------围栏的宏观信息面板*/

.fence_big_label {
  opacity: .80;
  filter: alpha(opacity=80);
  color: #fff;
  background-color: #3b4139;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 5px 5px;
  font-size: 12px;
  width: 200px;
  text-align: center;
  z-index: 1000;
  /*面板的位置*/
  position: absolute;
  display: none;
}


/*----------------------------信息面板*/

.P_div {
  position: relative;
}

.markLabel {
  opacity: .80;
  filter: alpha(opacity=80);
  color: #fff;
  background-color: #3b4139;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 5px 20px;
  width: 160px;
  text-align: center;
  z-index: 1000;
  /*面板的位置*/
  position: absolute;
  top: -40px;
  left: -70px;
}

.markLabel .labelName {
  display: block;
  text-align: center;
  overflow: hidden;
  /*字体*/
  font: 12px arial, simsun, sans-serif;
  white-space: nowrap;
}

.markLabel .labelArrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  bottom: -7px;
  left: 100px;
  margin-left: -5px;
  border-width: 8px 8px 0;
  border-top-color: #3b4139;
}
</style>
