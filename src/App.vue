<template>
  <div id="app" class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span>{{ globalAppConfig.app_name }}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>

          <md-list-item to="/">
              <md-icon>dashboard</md-icon>
              <span class="md-list-item-text">Dashboard 儀表板</span>
          </md-list-item>

          <md-list-item to="/checkin">
            <md-icon>check_circle</md-icon>
            <span class="md-list-item-text">Check-in 報到</span>
          </md-list-item>

          <md-list-item to="/lunch">
            <md-icon>fastfood</md-icon>
            <span class="md-list-item-text">Lunch 午餐領取</span>
          </md-list-item>

          <md-list-item to="/announcement">
            <md-icon>announcement</md-icon>
            <span class="md-list-item-text">Announcement 大會公告</span>
          </md-list-item>

          <md-list-item to="/notification">
            <md-icon>notifications_active</md-icon>
            <span class="md-list-item-text">Notification 推播訊息</span>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuVisible: false,
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>


<style lang="scss">
@import "~vue-material/dist/theme/engine";
@include md-register-theme("default", (
  primary: #4caf50, // The primary color of your application
  accent: md-get-palette-color(pink, 500) // The accent or secondary color
));
@import "~vue-material/dist/theme/all";

.page-container, .md-app {
  min-height: 100vh;
}
</style>
