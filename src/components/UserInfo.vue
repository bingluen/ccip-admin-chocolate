<template>
  <md-card>
    <template v-if="user">
      <md-card-header>
        <md-card-header-text>
          <div class="md-subhead">{{ user.first_use ? `OPass login on ${user.first_use}` : 'Not login on OPass' }}</div>
          <div class="md-title">{{ user.user_id ? user.user_id : 'unknown' }}</div>
          <div class="md-subhead">{{ user.type ? user.type : 'unknown' }}</div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>
        <ul>
          <template v-for="(scenarios, index) in user.scenarios">
            <li :key="index">
              {{ scenarios.key }} : {{ scenarios.used ? `used at ${scenarios.used}` : 'Not yet' }}
              <ul v-if="Object.keys(scenarios.attr).length > 0">
                <template v-for="(attr, index) in Object.keys(scenarios.attr)">
                  <li :key="index">{{ `${attr}: ${scenarios.attr[attr]}` }}</li>
                </template>
              </ul>
            </li>
          </template>
        </ul>
      </md-card-content>
    </template>
    <template v-else>
      <md-empty-state
        md-icon="face"
        md-label="No user data"
        md-description="Scan QRCode or enter token to get user data.">
      </md-empty-state>
    </template>
  </md-card>
</template>

<script>
export default {
  name: 'UserInfo',
  props: ['user'],
};
</script>
