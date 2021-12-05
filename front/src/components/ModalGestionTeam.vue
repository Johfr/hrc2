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
              Close
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
              <!-- " @input="showPlayerDatas(actifPlayer)" -->
              <li class="players_item actif" v-for="actifPlayer in actifPlayers" :key="actifPlayer.id">
                <v-btn color="blueLight">
                  <div class="checkbox-container">
                    <v-checkbox :id="actifPlayer.id.toString()" v-model="actifPlayer.kicked" @click="showNotificationFn(actifPlayer)"></v-checkbox>
                    <label :for="actifPlayer.id.toString()">
                      #{{ actifPlayer.id }} {{ actifPlayer.nickname }}
                    </label>
                  </div>
                  <p class="player-info" v-if="actifPlayer.joinThe">
                    A rejoint le : {{ formatDate(actifPlayer.joinThe) }}
                  </p>
                </v-btn>
              </li>
            </ul>
          </v-list-item>
          <v-subheader>Joueurs Inactifs</v-subheader>
          <v-list-item>
            <ul class="players_list inactif">
              <!-- " @input="showPlayerDatas(inactifPlayer)" -->
              <li class="players_item inactif" v-for="inactifPlayer in inactifPlayers" :key="inactifPlayer.id">
                <v-btn color="redLight">
                  <div class="checkbox-container">
                    <v-checkbox :id="inactifPlayer.id.toString()" :class="inactifPlayer" v-model="inactifPlayer.kicked" @click="showNotificationFn(inactifPlayer)"></v-checkbox>
                    <label :for="inactifPlayer.id.toString()">
                      #{{ inactifPlayer.id }} {{ inactifPlayer.nickname }}
                    </label>
                  </div>
                  <p class="mb-0 player-info" v-if="inactifPlayer.joinThe">
                    A Rejoint le : {{ formatDate(inactifPlayer.joinThe) }}
                  </p>
                  <p class="player-info" v-if="inactifPlayer.kickedThe">
                    Kické le : {{ formatDate(inactifPlayer.kickedThe) }}
                  </p>
                </v-btn>
              </li>
            </ul>
          </v-list-item>
        </v-list>
      </v-card>
      <Notification v-show="showNotification" :player="playerUpdated" />
  </v-dialog>
</template>

<script>
import Notification from './Notification/Notification.vue'
  export default {
    components: {
      Notification,
    },
    data () {
      return {
        dialog: false,
        showNotification: false,
        sound: true,
        widgets: false,
        defaultActifPlayersDatas: null,
        defaultinactifPlayersDatas: null,
        playerUpdated: { id : "2million 350"},
      }
    },
    computed: {
      actifPlayers () {
        const actif = this.$store.getters.getActifPlayers
        actif.sort((a, b) => {
          return a.id - b.id
        })
        return actif
        // get: function () {
        //   return this.$store.getters.getActifPlayers
        // },
        // set: function () {
        //   return this.$store.getters.getActifPlayers
        // },
      },
      inactifPlayers () {
        const inactif = this.$store.getters.getInactifPlayers
        inactif.sort((a, b) => {
          return a.id - b.id
        })
        return inactif
        // get: function () {
        //   return this.$store.getters.getInactifPlayers
        // },
        // set: function () {
        //   return this.$store.getters.getInactifPlayers
        // },
      },
    },
    methods: {
      showNotificationFn (player) {
        // console.log('defaultPlayers', player?.kicked)
        if (player.kicked) {
          player.kickedThe = Date.now()
        } else {
          player.kickedThe = null
        }
        // console.log('defaultPlayers', player?.kickedThe)
        this.playerUpdated = player
        this.showNotification = true
        setTimeout(() => {
          this.showNotification = false
        }, 2500)
      },
      formatDate (playerDate) {
          const frenchDay = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
          const kickedThe = new Date(playerDate) // Sun Dec 05 2021 18:45:01 GMT+0100 
          const kickedDay = kickedThe.getDay() // retourne 0-6
          const kickedTheToString = kickedThe.toDateString()
          const kickedTheSplitted = kickedTheToString.split(' ')
          const kickedTheFormatted = frenchDay[kickedDay] + ' ' + kickedTheSplitted[2] + ' ' + kickedTheSplitted[1] + ' ' + kickedTheSplitted[3]
          return kickedTheFormatted
      },
      close () {
        const players = [...this.actifPlayers, ...this.inactifPlayers]
        this.$store.dispatch('updatePlayersStatus', players)
        this.dialog = false
      },
      // save () {
        // this.actifPlayers = []
        // this.inactifPlayers = []
        // const players = [...this.actifPlayers, ...this.inactifPlayers]
        // this.actifPlayers = this.$store.getters.getActifPlayers
        // this.inactifPlayers = this.$store.getters.getInactifPlayers
        // const updatePlayersStatus = this.$store.dispatch('updatePlayersStatus', players)
        // updatePlayersStatus
        //   .then( (() => {
        //     this.close()
        //   }))
      // }
    }
  }
</script>

<style lang="scss" scoped>
.players_item {
  display: flex;
  align-items: center;
  list-style-type: none;
}
.players_list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  .v-btn {
    color: #fff;
    cursor: pointer;
    height: auto;

    &::v-deep {
      .v-btn__content {
        flex-direction: column;
      }
    }

    .checkbox-container {
      display: flex;
      align-items: center;
      height: 40px;

      label {
        cursor: pointer;
      }
    }
    // &.inactif {
    .player-info {
      font-size: 12px;
      text-transform: initial;
    }
    // }
  }
}
</style>