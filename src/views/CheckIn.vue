<template>
  <div class="checkin">
    <h1>Check-In 報到</h1>
    <div class="md-layout">
      <div class="md-layout-item md-large-size-30 md-xlarge-size-25 md-small-size-100">
        <QRCodeReader @reciver="reciver"/>
      </div>

      <div class="md-layout-item md-large-size-70 md-xlarge-size-75 md-small-size-100">
        <user-info :user="user"/>
      </div>

    </div>
  </div>
</template>

<script>
import QRCodeReader from '../components/QRCodeReader.vue';
import UserInfo from '../components/UserInfo.vue';

export default {
  name: 'CheckIn',
  components: {
    QRCodeReader,
    UserInfo,
  },
  data: () => ({
    token: null,
    user: null,
  }),
  methods: {
    reciver(token) {
      console.log(token);
      this.token = token;
    },
  },
};
</script>

<style lang="scss" scoped>
.md-layout-item:nth-child(n+1) {
  margin-top: 2em;
}
</style>
