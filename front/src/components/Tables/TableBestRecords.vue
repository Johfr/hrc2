<template>
  <v-container fluid>
    <ul class="list">
      <li class="item" v-for="bestKm in bestKms" :key="bestKm.id">
        <span class="item_title item_text">
          {{ bestKm.playerName }}
        </span>
        <span class="item_value item_text">
          {{ bestKm.bestKm }}km
        </span>
      </li>
    </ul>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        allPlayers: null,
        actualEvent: {},
        bestKms: null,
      }
    },
    created () {
      this.allPlayers = this.$store.getters.getPlayers
      
      this.allEvents = this.$store.getters.getEvents
      
      this.allEvents.map((event, index) => {
        if (event.actualEvent) {
          this.actualEvent.name = event.eventName
          this.actualEvent.date = event.start + " - " + event.end
          this.actualEventIndex = index
        }
      })
      this.calculBestPlayerByKm(this.actualEvent.name)
    },
    computed: {
      actualEventSelected () {
        return this.$store.state.eventSelected
      },
    },

    watch: {
      actualEventSelected () {
        this.calculBestPlayerByKm(this.actualEventSelected.name)
      },
    },
    mounted () {
    },
    methods: {
      calculBestPlayerByKm (actualEventName) { // Classe les joueurs par rapport à leur meilleur km
        let bestPlayersKm = []
        this.allPlayers.map((player) => {
          player.stats.map((stat) => {
            if (actualEventName === stat.eventName) {
              let playerKms = []
              let bestPlayerKm = 0

              for (let i =0; i < stat.eventParts.length; i++) {
                playerKms.push(stat.eventParts[i].km)
              }
              playerKms.sort(function(a, b) {
                return a - b;
              })
              bestPlayerKm = playerKms[playerKms.length - 1]
              bestPlayersKm.push({playerName: player.nickname ,bestKm : bestPlayerKm})
            }
          })
        })
        this.bestKms = bestPlayersKm
      },
    },
  }
</script>

<style lang="scss" scoped>
.list {
  min-height: 250px;
  max-height: 250px;
  padding: 30px 20px;
  box-shadow: 0 2px 3px #e5e5e5;
  overflow: auto;

  .item {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin-bottom: 5px;

    .item_value {
      font-weight: 700;
    }
  }
}</style>