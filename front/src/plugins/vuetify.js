import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#63411e', // #3f51b5',
          secondary: '#0000ff', // '#b0bec5',
          blue: '#0000ff',
          blueLight: '#63b2ff',
          green: '#ecc73e',
          greenApple: '#acce5f',
          greenDarker: '#94722c',
          redLight: 'cb1f1f',
        //   accent: '#8c9eff',
        //   error: '#b71c1c'
        },
      },
    },
});
