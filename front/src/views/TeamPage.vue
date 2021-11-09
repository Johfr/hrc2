<template>
<v-container>
  <v-row>
    <h1 class="col-6">Statistique des membres</h1>
  </v-row>
  
  <v-row>
    <v-col cols="10">
      <v-select
        :items="eventsItems"
        v-model="events"
        label="events"
      />
    </v-col>
    <v-col cols="2" class="event-btn-container">
      <v-btn
        color="primary"
        dark
      >
        Nouvel Event
        <v-icon small>
          mdi-plus
        </v-icon>
      </v-btn>
    </v-col>
  </v-row>

  <v-row>
    <!-- Meilleurs scores : filtre tous les scores d'1 joueurs, retourne le meilleur puis compare avec tous les autres joueurs et retourne le meilleur score + nom du joueur -->
    <v-col md="3">
      <h2>Meilleurs rouleurs</h2>
      <TableBestRecords />
    </v-col>
    <v-col md="9">
      <TableMembers />
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import TableMembers from '../components/TableMembers.vue'
import TableBestRecords from '../components/Tables/TableBestRecords.vue'

  export default {
    name: 'Home',
    data () {
      return {
        actualEvent: {},
        actualEventIndex: null,
        allEvents: null, // datas API provenant du store
        eventsItems: [],
        events: [],
      }
    },
    computed: {
      actualEventFn () {
        return this.actualEvent
      }
    },
    components: {
        TableMembers,
        TableBestRecords,
        // TableSelet
      // HelloWorld
      // TeamLists,
    },
    watch: {
      events (val) {
        let actualEvent = {}
        
        this.allEvents.map((event, index) => {
          if (event.eventName === val) {
            actualEvent.name = event.eventName
            actualEvent.date = event.start + " - " + event.end
            this.actualEventIndex = index
          }
        })
        this.$store.commit('updateEventSelected', actualEvent)
      }
    },
    created () {
      this.allEvents = this.$store.getters.getEvents
      this.initEvent()
        
      this.allEvents.map((event, index) => {
        if (event.eventName) {
          this.actualEvent.name = event.eventName
          this.actualEvent.date = event.start + " - " + event.end
          this.actualEvent.index = index
        }
      })
    },
    methods: {
      initEvent () {
        this.allEvents.map(event => {
          this.eventsItems.push(event.eventName)
          
          // if (event.eventName) {
          //   this.actualEvent.name = event.eventName
          //   this.actualEvent.date = event.start + " - " + event.end
          //   this.actualEventIndex = index
          // }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .event-btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
