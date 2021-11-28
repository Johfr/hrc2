<template>
  <v-container fluid class="best-runners_container">
    <h3 class="mb-10 encart-h3">{{ recordTitle }}</h3>
    <ul class="list">
      <li class="item" v-for="(bestRecord, id) in bestRecords" :key="bestRecord.id">
        <span class="item_title item_text" :title="bestRecord.playerName">
          <span class="item_title-user-id">#{{ id +1 }} </span>
          <span class="item_title-user-name">{{ bestRecord.playerName }}</span>
        </span>
        <span class="item_value item_text">
          {{ bestRecord.bestRecord }} {{ recordName }}
        </span>
      </li>
    </ul>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        // allPlayers: null,
        actualEvent: {},
        bestRecords: null,
      }
    },
    props: {
      recordKey: {
        type: String,
        default: () => {}
      },
      recordName: {
        type: String,
        default: () => {}
      },
      recordTitle: {
        type: String,
        default: () => {}
      },
      newEventCreated: {
        type: Boolean,
        default: false
      },
    },
    created () {
      // allPlayers = this.$store.getters.getPlayers
      
      this.allEvents = this.$store.getters.getEvents
      
      this.allEvents.map((event, index) => {
        if (event.actualEvent) {
          this.actualEvent.name = event.eventName
          this.actualEvent.date = event.start + " - " + event.end
          this.actualEventIndex = index
        }
      })
      this.calculBestPlayerByPts(this.actualEvent.name)
    },
    computed: {
      actualEventSelected () {
        return this.$store.getters.getSelectedEvent
      },
      playersUpdated () {
        return this.$store.state.playersUpdated
      },
      allPlayers () {
        return this.$store.getters.getPlayers
      },
    },

    watch: {
      actualEventSelected () {
        this.calculBestPlayerByPts(this.actualEventSelected.name)
      },
      playersUpdated () {
        // allPlayers = this.$store.getters.getPlayers
        // console.log(allPlayers)
        
        if (this.actualEventSelected !== null) { // via le selecteur d'event
          this.calculBestPlayerByPts(this.actualEventSelected.name)
        } else { // via l'état de l'event en cours
          this.calculBestPlayerByPts(this.actualEvent.name)
        }
      },
    },
    mounted () {
    },
    methods: {
      calculBestPlayerByPts (actualEventName) { // Classe les joueurs par rapport à leur meilleur points
        let bestPlayers = []
        this.allPlayers.map((player) => {
          player.stats.map((stat) => {
            if (actualEventName === stat.eventName) {
              let playerScore = []
              let bestPlayer = 0

              for (let i =0; i < stat.eventParts.length; i++) {
                playerScore.push(stat.eventParts[i][this.recordKey]) // -> tout se passe ici
              }
              playerScore.sort(function(a, b) {
                return a - b;
              })
              bestPlayer = playerScore[playerScore.length - 1]
              if (this.recordKey === 'pts') {
                const bestPlayer = parseInt(playerScore[0]) + parseInt(playerScore[1]) + parseInt(playerScore[2]) + parseInt(playerScore[3])
                bestPlayers.push({playerName: player.nickname ,bestRecord : bestPlayer})
              } else {
                bestPlayers.push({playerName: player.nickname ,bestRecord : bestPlayer})
              }
            }
          })
        })
        // ordonne directement en décroissant
        bestPlayers.sort(function(a, b) {
          return b.bestRecord - a.bestRecord;
        })

        this.bestRecords = bestPlayers
      },
    },
  }
</script>

<style lang="scss" scoped>
.best-runners_container {
  min-height: 250px;
  // max-height: 250px;
  padding: 0px 20px;
  box-shadow: 0 2px 3px #e5e5e5;
  overflow: auto;

  &:not(:last-child) {
    margin-bottom: 25px;
  }
}
.list {
  padding-left: 0;
  .item {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin-bottom: 5px;

    .item_title {
      // font-size: 18px;
      text-transform: uppercase;
      max-width: 65%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .item_value {
      font-weight: 700;
    }
  }
}</style>