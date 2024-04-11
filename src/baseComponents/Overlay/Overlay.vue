
      <div class="overly" :style="`z-index:${zIndex}`" v-if="show" @click='handleClick'></div>
    </transition>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Overlay',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: Number,
      default: 2000,
    },
    closeOnClickModal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const handleClick = () => {
      if (props.closeOnClickModal) {
        emit('close');
      }
      return;
    };
    return {
      handleClick,
    };
  },
});
</script>

<style lang='scss'>
.overly {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.35);
  // 模糊滤镜
  backdrop-filter: blur(10px);
}
</style>
