<template>
  <div class="announcement md-layout">
    <AnnForm class="md-layout-item md-large-size-30 md-small-size-100"
      :isSending="sending" @submit="submitAnnouncement" />
    <AnnList class="md-layout-item md-large-size-70 md-small-size-100"
      :announcements="announcements"/>
  </div>
</template>

<script>
import AnnForm from '../components/AnnouncementForm.vue';
import AnnList from '../components/AnnouncementList.vue';

export default {
  name: 'Announcement',
  components: {
    AnnForm,
    AnnList,
  },
  data: () => ({
    sending: false,
    announcements: [],
  }),
  methods: {
    submitAnnouncement(packet) {
      this.sending = true;
      // TODO: submit packet
    },
    fetchAnnouncement() {

    },
  },
};
</script>

<style lang="scss" scoped>
.md-layout-item:nth-child(n+1) {
  margin-top: 2em;
}
</style>
