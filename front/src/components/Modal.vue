<template>
  <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Gestion de l'équipe
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Gestion de l'équipe</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="close"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-list
          three-line
          subheader
        >
          <v-subheader>Joueurs Actifs</v-subheader>
          <v-list-item>
            <ul class="players_list actif">
              <li class="players_item actif" v-for="actifPlayer in actifPlayers" :key="actifPlayer.id">
                <v-checkbox v-model="actifPlayer.kicked" @click="showPlayerDatas(actifPlayer)"></v-checkbox>
                {{ actifPlayer.nickname }}
                {{ actifPlayer.kicked ? "kické" : "Actif" }}
              </li>
            </ul>
          </v-list-item>
          <v-subheader>Joueurs Inactifs</v-subheader>
          <v-list-item>
            <ul class="players_list inactif">
              <li class="players_item inactif" v-for="inactifPlayer in inactifPlayers" :key="inactifPlayer.id">
                <v-checkbox :class="inactifPlayer" v-model="inactifPlayer.kicked" @click="showPlayerDatas(inactifPlayer)"></v-checkbox>
                {{ inactifPlayer.nickname }}
                {{ inactifPlayer.kicked ? "kické" : "Actif" }}
              </li>
            </ul>
          </v-list-item>
        </v-list>
      </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        actifPlayers: null,
        inactifPlayers: null,
        defaultActifPlayersDatas: null,
        defaultinactifPlayersDatas: null,
      }
    },
    created () {
      this.actifPlayers = this.$store.getters.getActifPlayers
      this.inactifPlayers = this.$store.getters.getInactifPlayers
    },
    methods: {
      showPlayerDatas () {
        console.log('item1', this.$store.getters.getPlayers[0])
        // setTimeout(() => {
          
        //   this.$store.dispatch('kickPlayer', {
        //     nickname: item.nickname,
        //     id: item.id,
        //     kicked: item.kicked,
        //   })
          
        // }, 1000)
        console.log('item2', this.$store.getters.getPlayers[0])
      },
      close () {
        this.actifPlayers = []
        this.actifPlayers = this.$store.getters.getActifPlayers
        this.dialog = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.players_item {
  display: flex;
  align-items: center;
  list-style-type: none;
}
</style>