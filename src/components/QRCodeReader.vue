<template>
  <md-card>
    <md-card-header>
      <h1 class="md-title">QRCode Scanner</h1>
    </md-card-header>
    <md-card-content>
      <div class="wrapper" :width="width" :height="height">
        <video ref="video" playsinline autoplay muted></video>
        <div v-if="displayError">
          找不到相機或無法開啟相機
        </div>
      </div>
      <md-field>
        <label for="token">Token</label>
        <md-input name="token" id="token" v-model="token"></md-input>
      </md-field>
    </md-card-content>
  </md-card>
</template>

<script>
import _ from 'lodash';
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
    token: null,
  }),
  watch: {
    token(newValue) {
      this.sendToken(this, newValue);
    },
  },
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
      this.token = content;
    },
    sendToken: _.debounce((that, newValue) => {
      that.$emit('reciver', newValue);
    }, 500),
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
