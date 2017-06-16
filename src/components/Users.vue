<template>
  <div id="users">
    <cheader></cheader>
    <!-- 搜索区 -->
    <el-row class="cc_row">
      <el-col :span="4">
        <el-input v-model="name" placeholder="请输入姓名" size="small"></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="sex" placeholder="请选择性别" size="small">
          <el-option label="男生" value="1"></el-option>
          <el-option label="女生" value="0"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" icon="search" size="small">搜索</el-button>
      </el-col>
    </el-row>
    <!-- 按钮组 -->
    <el-row class="cc_row">
      <el-button type="primary" size="small" @click="add_user_visible = true">新增<i class="el-icon-plus el-icon--right"></i></el-button>
      <el-button type="success" size="small" @click="edit_user._visible = true">编辑<i class="el-icon-edit el-icon--right"></i></el-button>
      <el-button type="danger" size="small">删除<i class="el-icon-delete el-icon--right"></i></el-button>
    </el-row>
    <!-- 表单 -->
    <el-row class="cc_row">
      <el-table class="cc_table" ref="multipleTable" :data="users_list" border style="width: 100%" :height='table_height' @select="select">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="120">
        </el-table-column>
        <el-table-column prop="memo" label="备注" show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </el-row>
    <!-- 新增用户弹窗 -->
    <el-dialog custom-class="user_add" title="新增用户" :visible.sync="add_user_visible" :close-on-click-modal='false'>
      <el-form :model="add_form">
        <el-form-item label="姓名" :label-width="add_user_lable_width">
          <el-input v-model="add_form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="add_user_lable_width">
          <el-select v-model="add_form.sex" placeholder="请选择活动区域">
            <el-option label="男生" value="1"></el-option>
            <el-option label="女生" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" :label-width="add_user_lable_width">
          <el-input v-model="add_form.memo" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="add_user_visible = false">取 消</el-button>
        <el-button type="primary" @click="_add_yes">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑用户弹窗 -->
    <el-dialog custom-class="user_add" title="编辑用户" :visible.sync="edit_user._visible" :close-on-click-modal='false'>
      <el-form :model="edit_user._form">
        <el-form-item label="姓名" :label-width="edit_user._lable_width">
          <el-input v-model="edit_user._form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="edit_user._lable_width">
          <el-select v-model="edit_user._form.sex" placeholder="请选择活动区域">
            <el-option label="男生" value="1"></el-option>
            <el-option label="女生" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" :label-width="edit_user._lable_width">
          <el-input v-model="edit_user._form.memo" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="edit_user._visible = false">取 消</el-button>
        <el-button type="primary" @click="_add_yes">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Header from './com_compts/main_header.vue'
export default {
  name: 'users',
  // -----------------------配置
  data() {
    return {
      // ----------------------------新增用户
      // 状态的显示
      add_user_visible: false,
      // 标签的宽度
      add_user_lable_width: '110px',
      add_form: {
        name: '',
        sex: '男生',
        memo: '',
      },
      // ----------------------------编辑用户
      edit_user: {
        _visible: false,
        // 标签的宽度
        _lable_width: '110px',
        _form: {
          name: '',
          sex: '男生',
          memo: '',
        },
      },
      // ---------------------------输入框
      name: '',
      sex: "男生",
      // --------------------table
      table_height: $(window).height() - 180,
      users_list: [{
        name: '王小虎',
        sex: '男',
        memo: '上海市普陀区金沙江路 1518 弄'
      }, {
        name: '王小虎',
        sex: '男',
        memo: '上海市普陀区金沙江路 1518 弄'
      }],
      // 用户选择到数据
      select_data: null,
      // ---------------------------翻页数据
      currentPage4: 4
    }
  },
  methods: {
    // -------------------------------------add
    _add_yes() {
      if (this.add_form.name == '') {
        this.$message({
          type: 'warning',
          duration: 2000,
          message: '用户姓名不能为空'
        });
        return;
      }
      this.users_list.push({
        name: this.add_form.name,
        sex: this.add_form.sex,
        memo: this.add_form.memo
      });
      this.add_user_visible = false;
    },

    // -------------------------------表格选择到的数据
    select(selection, row) {
      this.select_data = row;
    },
    // -------------------------------翻页函数
    // 翻页的数据
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  // -----------------------周期
  beforeCreate() {
    console.log('组件实例刚刚被创建');
    var h = $(window).height();

    this.table_height = h - 120 + 'px';
    console.log(this.table_height);
    // console.log(this);
  },
  mounted() {
    $("#users").niceScroll({
      cursorwidth: 12,
      cursoropacitymin: 0.4,
      cursorcolor: '#6e8cb6',
      cursorborder: 'none',
      cursorborderradius: 4,
      autohidemode: 'leave'
    });
  },
  beforeDestroy: function() {},
  // ---------------------组件注册
  components: {
    cheader: Header
  },
}
</script>
<style lang="less">
// 这里不能把属性设置为私有
@import '../css/commom/main.less';
#users {
  height: 100%;
  box-sizing: border-box;
  padding-top: @header_h+10px;
  // position: relative;
  background-color: white;
  overflow-x: auto;
  >.cc_row {
    padding-left: 30px;
    padding-right: 50px;
    padding-bottom: 5px;
    // 搜索框的样式
    >.el-col {
      padding-right: 10px;
    }
    >.el-table {
      th {
        background-color: @other_bgc;
      }
      thead div {
        background-color: @other_bgc;
        color: @font_color;
      }
    }
  }
  >.el-dialog__wrapper {
    // 新增用户的弹窗样式
    >.user_add {
      // 头部
      >.el-dialog__header {
        >.el-dialog__title {
          color: @font_color;
        }
        background-color: @other_bgc;
        color: @font_color;
      }
      >.el-dialog__body {
        padding: 20px;
        padding-bottom: 0px;
        .el-form-item {
          width: 40%;
          display: inline-block;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
