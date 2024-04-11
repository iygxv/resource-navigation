
    <div class="cover"></div>
    
    <img src="https://api.dujin.org/bing/1920.php" class='back' />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Background',
  setup() {
    return {};
  },
});
</script>

<style lang='scss'>
.back-box {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -9;
  .cover {
    background-image: radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -8;
  }
  .back {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    pointer-events: none;
    filter: blur(0px);
    transition: 0.25s;
    z-index: -9;
  }
}
</style>
