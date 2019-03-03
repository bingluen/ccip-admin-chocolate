<template>
  <div class="notification">
    <form novalidate @submit.prevent="validateFields">
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Publish Notification</div>
        </md-card-header>

        <md-card-content>

          <md-field>
            <label for="msg-target">發送對象</label>
            <md-select v-model="packet.target" name="msg-target" id="msg-target">
              <template v-for="(role, index) in globalAppConfig.notification.oneSignal.roles">
                <md-option :key="index" :value="role.tag">{{ role.name }}</md-option>
              </template>
            </md-select>
          </md-field>

          <md-field :class="isInvaild('zh_tw')">
            <label for="msg-zh-tw">中文訊息(required)</label>
            <md-input name="msg-zh-tw" id="msg-zh-tw"
              v-model="packet.zh_tw" :disabled="isSending" />
            <span class="md-error" v-if="!$v.packet['zh_tw'].required">Required.</span>
          </md-field>

          <md-field :class="isInvaild('en_us')">
            <label for="msg-en-us">英文訊息(required)</label>
            <md-input name="msg-en-us" id="msg-en-us"
              v-model="packet.en_us" :disabled="isSending" />
            <span class="md-error" v-if="!$v.packet['en_us'].required">Required.</span>
          </md-field>

          <md-field>
            <label for="uri">URI(optional)</label>
            <md-input name="uri" id="uri" v-model="packet.uri" />
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="isSending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="isSending">
            Publish
          </md-button>
        </md-card-actions>


      </md-card>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'Notification',
  mixins: [validationMixin],
  props: {
    submit: {
      type: Function,
    },
    isSending: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    packet: {
      zh_tw: '',
      en_us: '',
      uri: '',
      target: '',
    },
  }),
  validations: {
    packet: {
      zh_tw: {
        required,
      },
      en_us: {
        required,
      },
    },
  },
  methods: {
    isInvaild(fieldName) {
      const field = this.$v.packet[fieldName];
      if (field !== null) {
        return {
          'md-invalid': field.$invalid && field.$dirty,
        };
      }

      return null;
    },
    validateFields() {
      this.$v.$touch();

      if (this.$v.$invalid === false) {
        // TODO: push notification
      }
    },
  },
};
</script>
