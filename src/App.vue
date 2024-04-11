
<template>
  <social-contact></social-contact>
  <Bookmark></Bookmark>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import Bookmark from 'coms/BookMark/Bookmark.vue';
import SocialContact from 'coms/SocialContact/SocialContact.vue';
export default defineComponent({
  name: '',
  components: {
    SocialContact,
    Bookmark,
  },
  setup() {
    return {};
  },
});
</script>

<style lang='scss'>
// 给根组件开启相对定位  方便子元素进行布局
#app {
  position: relative;
}
</style>
