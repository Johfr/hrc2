<template>
  <v-container fluid class="best-runners_container">
    <h3 class="mb-10 encart-h3">{{ recordTitle }}</h3>
    <!-- {{ newEventCreated }} -->
    <ul class="list">
      <li class="item" v-for="(participation, id) in bestParticipation" :key="participation.id">
        <span class="item_title item_text" :title="participation.playerName">
          <span class="item_title-user-id">#{{ id +1 }} </span>
          <span class="item_title-user-name">{{ participation.playerName }}</span>
        </span>
        <span class="item_value item_text">
          {{ participation.nbreParticipation }}
          <span class="item_fff item_text">
            {{ participation.nbreParticipation > 1 ? "participations" : "participation"}}
          </span>
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
        bestRecords: null,
        bestParticipation: []
      }
    },
    props: {
      recordName: {
        type: String,
        default: () => {}
      },
      recordTitle: {
        type: String,
        default: () => {}
      },
      // newEventCreated: {
      //   type: Boolean,
      //   default: false
      // },
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
      this.calculBestPlayerByPts(this.actualEvent.name)
    },
    computed: {
      actualEventSelected () {
        return this.$store.state.eventSelected
      },
      playersUpdated () {
        return this.$store.state.playersUpdated
      }
    },
    watch: {
      actualEventSelected () {
        this.calculBestPlayerByPts(this.actualEventSelected.name)
      },
      playersUpdated () {
        this.allPlayers = this.$store.getters.getPlayers
        
        if (this.actualEventSelected !== null) { // via le selecteur d'event
          this.calculBestPlayerByPts(this.actualEventSelected.name)
        } else { // via l'état de l'event en cours
          this.calculBestPlayerByPts(this.actualEvent.name)
        }
      },
      // newEventCreated () {
        // on reload tout
      // },
    },
    mounted () {
    },
    methods: {
      calculBestPlayerByPts (actualEventName) { // Classe les joueurs par rapport à leur meilleur points
        let nbreParticipation = []
        this.allPlayers.map((player) => {
          player.stats.map((stat) => {
            if (actualEventName === stat.eventName) {
              let playerScore = []

              for (let i =0; i < stat.eventParts.length; i++) {
                playerScore.push(stat.eventParts[i][this.recordName]) // -> tout se passe ici
              }
              // calcul du nombre de participation
              // si score1 < score2 < score3 < score4 alors 4 partcipations
              let participation = 0
              
              if (playerScore[0] != 0) {
                participation += 1
              }
              if (playerScore[1] != 0) {
                participation += 1
              }
              if (playerScore[2] != 0) {
                participation += 1
              }
              nbreParticipation.push({playerName: player.nickname, nbreParticipation : participation})

            }
          })
        })
        // ordonne directement en décroissant
        nbreParticipation.sort(function(a, b) {
          return b.nbreParticipation - a.nbreParticipation;
        })
        this.bestParticipation = nbreParticipation
      },
    },
  }
</script>

<style lang="scss" scoped>
.best-runners_container {
  min-height: 250px;
  max-height: 250px;
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

    .item_fff {
      font-weight: 400;
    }
  }
}</style>