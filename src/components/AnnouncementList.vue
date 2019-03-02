<template>
  <div>
    <md-table md-card v-if="announcements.length > 0">
      <md-table-toolbar>
        <h1 class="md-title">Announcement List</h1>
      </md-table-toolbar>

      <md-table-row>
        <md-table-head md-numeric>#</md-table-head>
        <md-table-head>發佈時間</md-table-head>
        <md-table-head>中文訊息</md-table-head>
        <md-table-head>英文訊息</md-table-head>
        <md-table-head>連結</md-table-head>
      </md-table-row>

      <template v-for="(item, index) in announcements">
        <md-table-row :key="index">
          <md-table-cell>{{ item.datetime }}</md-table-cell>
          <md-table-cell>{{ item.msg_zh }}</md-table-cell>
          <md-table-cell>{{ item.msg_en }}</md-table-cell>
          <md-table-cell>{{ item.uri }}</md-table-cell>
        </md-table-row>
      </template>
    </md-table>
    
    <md-card v-else>
      <md-empty-state
      md-icon="inbox"
      md-label="Announcement list is empty"/>
    </md-card>

  </div>
</template>

<script>
export default {
  name: 'AnnouncementList',
  props: {
    announcements: {
      type: Array,
      defalut: [],
    },
  },
};
</script>
