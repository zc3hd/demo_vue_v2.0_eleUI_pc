<template>
  <div id="app">
    <!-- main -->
    <el-row class="main" id="main">
      <!-- 左侧导航项 -->
      <el-col :span="4" class='left_manu'>
        <div id="menu_header">{{logo}}</div>
        <!-- 导航菜单 -->
        <el-menu id="lots" class="el-menu-vertical-demo" theme="dark" :router="true" :unique-opened='true' @open="handleOpen">
          <div v-for="(val,Index) in menu.lots" :key="Index">
            <el-submenu v-if="!val.path" :index="val.id">
              <template slot="title"><i :class="val.logo"></i>{{val.name}}</template>
              <el-menu-item v-for="(item_val,item_index) in val.items" :index="item_val.id" :route='{path:item_val.path}'>{{item_val.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index='val.id' :route='{path:val.path}'><i :class="val.logo"></i>{{val.name}}</el-menu-item>
          </div>
        </el-menu>
      </el-col>
      <el-col :span="20" class="right_content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      logo: '北斗导航',
      menu: {
        // 多级菜单
        lots: [
          // 1级菜单
          {
            id: "1",
            name: '基础信息',
            logo: 'el-icon-document',
            path: '',
            items: [{
              id: "1-1",
              path: '/user',
              name: '用户管理',
            }, {
              id: "1-2",
              path: '/news',
              name: '权限管理',
            }, ]
          },
          // 监控管理
          {
            id: "2",
            name: '地图监控',
            path: '/news',
            logo: 'el-icon-search',
          },
          // 围栏管理
          {
            id: "3",
            name: '围栏设置',
            path: '/home',
            logo: 'el-icon-setting',
          }
        ],
        // 一级菜单
        one: [
          // 监控管理
          {
            id: 2,
            name: '地图监控',
            path: '/news',
            logo: 'el-icon-message',
          },
          // 围栏管理
          {
            id: 3,
            name: '围栏设置',
            path: '/home',
            logo: 'el-icon-message',
          }
        ],
      }
    }
  },
  methods: {
    handleOpen(index, path) {
      console.log(index, path);
    },
  },
  mounted() {},
}
</script>
<!-- 导航菜单 -->
<style scoped lang="less">
@import './css/commom/main.less';
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  .font_famliy();
  >.main {
    height: 100%;
    background-color: #eef1f6;
    >.left_manu {
      height: 100%;
      overflow-y: auto;
      background-color: @mune_bgc;
      border-radius: 0px;
      >#menu_header {
        min-height: @header_h;
        background: @logo_bgc;
        text-align: center;
        line-height: @header_h;
        color: #bfcbd9;
        ;
        font-size: 20px;
        cursor: pointer;
      }
    }
    >.right_content {
      height: 100%;
    }
  }
}
</style>
