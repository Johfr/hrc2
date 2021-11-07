<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link to="/" class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <!-- <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
          /> -->
          
         <span> Hill Climb Racing 2 - Team's statistic</span>
        </router-link>

      <v-spacer></v-spacer>

      <NavbarUserAccount />
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavbarUserAccount from './components/NavbarUserAccount.vue';

export default {
  components: {NavbarUserAccount },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.v-main {
  padding-top: 130px !important;
}
  .v-application a {
    color: #fff;
    text-decoration: none;
  }
</style>