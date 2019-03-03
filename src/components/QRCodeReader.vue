<template>
  <div class="wrapper" :width="width" :height="height">
    <video ref="video" playsinline autoplay muted></video>
    <div v-if="displayError">
      找不到相機或無法開啟相機
    </div>
  </div>
</template>

<script>
import Instascan from 'instascan';

export default {
  name: 'QRCodeScanner',
  props: {
    reciver: {
      type: Function,
    },
    width: {
      type: Number,
      default: 320,
    },
    height: {
      type: Number,
      default: 200,
    },
  },
  data: () => ({
    opt: {
      continuous: true,
      video: 'null',
      mirror: true,
      captureImage: false,
      backgroundScan: false,
      refractoryPeriod: 10000, // 10 seconds
      scanPeriod: 1,
    },
    scanner: null,
    displayError: true,
  }),
  async mounted() {
    this.opt.video = this.$refs.video;
    this.scanner = new Instascan.Scanner(this.opt);
    this.scanner.addListener('scan', this.scanCallback);
    const cameras = await Instascan.Camera.getCameras();
    if (cameras.length > 0) {
      this.displayError = false;
      this.scanner.start(cameras[0]);
    }
  },
  methods: {
    scanCallback(content) {
      this.$emit('reciver', content);
    },
  },
  destroyed() {
    this.scanner.stop();
  },
};
</script>

<style lang="scss" scoped>
video {
  margin: 0 auto;
}
</style>
