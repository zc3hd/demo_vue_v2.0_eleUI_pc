# 【vue】element-ui learning summary~c~

### 1.基础

* index.html中引入bs的css文件，不要在组件中引入，不然每次编译都把大文件去编译了。

* ele_UI引入组件和样式，注册组件

``` js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI);
```

* 组件的使用,布局容器：eleui提供布局的组件，里面是该怎么写怎么写，有时候需要重新修改样式

``` html
<div id="home">
    <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark" type="warning">asd</div>
        </el-col>
    </el-row>
</div>
```

* less的使用

``` less
<style scoped lang="less">
#home {
  .grid-content.bg-purple-dark {
    border-radius: 4px;
    min-height: 36px;
    background-color: #58B7FF;
  }
  .el-date-editor.el-input {
    width: 100%;
  }
  .cc_form {
    margin-top: 20px;
  }
}
</style>
```

* 按需引入，

```
【1.安装】
npm install babel-plugin-component -D

【2.配置】将 .babelrc 修改为：
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-default"
    }
  ]]]
}

【3.使用】
import Vue from 'vue'
import { Button, Select } from 'element-ui'【es6】
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

【4.提取为一个文件】
import Vue from 'vue'
import {Button,Radio,DatePicker..} from 'element-ui'

Vue.use(Button)

【5.引入组件的名称】
来源就是配置的theme-default文件夹下面的组件样式的名称

【6.ele组件的绑定】
ele组件可以添加原生事件的绑定。--@click='get'
组件的属性绑定也是按照vue的属性绑定！！！

【7.自定义组件】
相对于6.0，自定义组件里包含ele的组件，但是在自定义组件的上面绑定事件为
@click.native = 'get'
里面的每个组件都可以代理触发父级组件所绑定的事件，
```

* 交互axios

``` 
npm install axios

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

【注意：】es6语法方法内部的this指向是当前函数的作用域的this，bind()方法直接可以改变函数内部的this指向。
```

### 2.0项目

* 引入公用的less文件

```
@import '../css/commom/main.less';
```

* 提取公共部分的头部组件

```
【其他组件】
import Header from './com_compts/main_header.vue'

export default {
  name: 'news',
  data() {
    return {
      msg: 'news'
    }
  },
  components:{
    Header
  }
}
<style scoped lang="less">
@import '../css/commom/main.less';
#home {
  height: 100%;
  background-color: #ddd;
  【1.需要设置borderbox--弹性盒子】
  box-sizing: border-box;
  【2.less爽的地方，可以在设置的基础上加10px】
  padding-top: @header_h+10px;
  【3.设置竖向滚动条】
  overflow-x:auto; 
  >.cc_form {
    padding-left: 30px;
    padding-right: 50px;
  }
}
</style>
【头部组件】
<template>
  <div id="main_header">
  </div>
</template>
<style scoped lang="less">
@import '../../css/commom/main.less';
#main_header {
  【一旦位置固定的话，宽度就是直接取平宽了。因为上面选择的是父级选择的20列的宽，83.3333%】
  width: 83.3333333%;
  min-height: @header_h;
  【这里需要设置固定定位】
  position: fixed;
  top:0;
  【层级需要设置，不然会和其他组件的其他内容叠加在一起】
  z-index: 10;
}
</style>
```


* vue信息提醒：this.$message('click on item ' + ...);

```
【下拉菜单】
<el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
  {{name}}<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown" class='header_user_info'>
    <el-dropdown-item command="1">信息编辑</el-dropdown-item>
    <el-dropdown-item command="2">密码修改</el-dropdown-item>
    <el-dropdown-item command="3">退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

methods: {
  // 会自动找到 command 属性
  handleCommand(command) {
    // 信息提醒
    this.$message('click on item ' + command);
  }
}
```

