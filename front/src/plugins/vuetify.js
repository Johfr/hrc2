import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
        //   primary: '#3f51b5',
        //   secondary: '#b0bec5',
          blue: '#0000ff',
          green: '#ecc73e',
          greenApple: '#acce5f',
          greenDarker: '#94722c',
        //   accent: '#8c9eff',
        //   error: '#b71c1c'
        },
      },
    },
});
