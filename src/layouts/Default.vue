<template>
  <div class="layout">
    <Header />
    <slot/>
    <!-- ⚠️⚠️⚠️ Internal only. Do not deploy uncommented! ⚠️⚠️⚠️ -->
    <!-- <button @click.prevent="removeCookie">Remove Browser Cookie</button> -->

    <vue-cookie-accept-decline
      :ref="'cookieConsent'"
      :elementId="'cookieConsent'"
      :debug="false"
      :position="'bottom-right'"
      :type="'floating'"
      :disableDecline="false"
      :transitionName="'slideFromBottom'"
      :showPostponeButton="false"
      @status="cookieStatus"
      @clicked-accept="cookieClickedAccept"
      @clicked-decline="cookieClickedDecline"
      @removedCookie="cookieRemovedCookie">

      <!-- Optional -->
      <p slot="message">
        We use cookies to ensure you get the best experience on our website.
      </p>

      <!-- Optional -->
      <span slot="declineContent">
        Only required cookies
      </span>

      <!-- Optional -->
      <span slot="acceptContent">
        Accept cookies
      </span>
    </vue-cookie-accept-decline>
  </div>
</template>

<script>
import Header from './partials/Header';
import VueCookieAcceptDecline from 'vue-cookie-accept-decline';

export default {
  // props: ['footer', 'primary-bg'],
  components: {
    Header,
    VueCookieAcceptDecline,
  },
  data () {
    return {
      cookieConsentStatus: null
    }
  },
  methods: {
    cookieStatus(status) {
      this.cookieConsentStatus = status;
    },
    cookieClickedAccept() {
      this.$gtm.enable(true);
      this.cookieConsentStatus = 'accept';
    },
    cookieClickedDecline() {
      this.cookieConsentStatus = 'decline';
    },
    cookieRemovedCookie() {
      this.cookieConsentStatus = null;
      this.$refs.cookieConsent.init();
    },
    removeCookie() {
      this.$refs.cookieConsent.removeCookie();
    }
  },
  mounted() {
    if (this.cookieConsentStatus === "accept") {
      this.$gtm.enable(true);
    }
  }
}
</script>