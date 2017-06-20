<template>
  <div id="news">
    <cHeader></cHeader>
    <div id="undone">undone</div>
  </div>
</template>
<script>
import cHeader from './com_compts/main_header.vue'
export default {
  name: 'news',
  data() {
    return {}
  },
  components: {
    cHeader
  },
  mounted() {
    this.$notify({
      title: '机器人Armin',
      type:'info',
      message: '你好，尊敬的来访者~~',
    });
    setTimeout(function() {
      this.$notify({
        title: '机器人Armin',
        type:'info',
        message: '我是自动回复机器人~',
      });
    }.bind(this), 1500);
    setTimeout(function() {
      this.$notify({
        title: '机器人Armin',
        type:'info',
        message: '主人说该页面还没有完成~请去其他地方看看吧~~^_^',
      });
    }.bind(this), 3000);
    setTimeout(function() {
      this.$notify({
        title: '机器人Armin',
        type:'info',
        message: '主人还说，你真帅~~',
      });
    }.bind(this), 5000);
    setTimeout(function() {
      this.$notify({
        title: '机器人Armin',
        type:'info',
        message: '但是那是主人说的，我觉得你一点也不帅~~O(∩_∩)O哈哈~',
      });
    }.bind(this), 7000);
    setTimeout(function() {
      this.$notify({
        title: '机器人Armin',
        type:'info',
        message: '来打死我啊~~哈哈哈~~',
      });
    }.bind(this), 9000);
    setTimeout(function() {
      this.$notify({
        title: '机器人Armin',
        type:'info',
        message: '来打死我啊~~来啊~~~哈哈哈~~',
      });
    }.bind(this), 10000);
    setTimeout(function() {
      this.$notify({
        title: '机器人Armin',
        type:'info',
        message: '看什么看~~你个损塞~~~~~~~~~~',
      });
    }.bind(this), 12000);
  },
}
</script>
<style lang="less">
#undone{
  margin: auto auto;
  margin-top: 100px;
  font-size: 50px;
  text-align: center;
  line-height: 100px;
  height: 100px;
  font-family:"微软雅黑";
}
</style>
