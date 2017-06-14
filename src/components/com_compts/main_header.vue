<template>
  <div id="main_header">
    <el-col :span="18" class='header'>
      <div class="grid-content"></div>
    </el-col>
    <el-col :span="6" class='header'>
      <div class="grid-content user">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
          {{name}}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class='header_user_info'>
            <el-dropdown-item command="1"><i class="el-icon-edit"></i>信息编辑</el-dropdown-item>
            <el-dropdown-item command="2"><i class="el-icon-setting"></i>密码修改</el-dropdown-item>
            <el-dropdown-item command="3"><i class="el-icon-circle-close"></i>安全退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
      return {
        name: 'admin'
      }
    },
    methods: {
      // 会自动找到 command 属性
      handleCommand(index) {
        // 信息提醒
        this.$message('click on item ' + index);
      }
    }
}
</script>
<style scoped lang="less">
@import '../../css/commom/main.less';
#main_header {
  // 一旦位置固定的话，宽度就是直接取平宽了。
  width: 83.3333333%;
  min-height: @header_h;
  position: fixed;
  top:0;
  z-index: 10;
  >.header {
    >.grid-content {
      border-radius: 0px;
      min-height: @header_h;
      background: @mune_bgc;
      box-sizing: border-box;
    }
    >.user {
      text-align: right;
      line-height: @header_h;
      padding-right: 30px;
      >.el-dropdown {
        display: block;
        color: @font_color;
        cursor: pointer;
      }
    }
  }
}
// 头部信息的下拉列表
.header_user_info{
  color: @mune_bgc;
  font-size: 14px;
  >li{
    >i{
      margin-right: 10px;
    }
  }
}
</style>
