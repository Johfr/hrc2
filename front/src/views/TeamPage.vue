<template>
<v-container>
  <!-- Gestion de l'équipe -->
  <v-row>
    <v-col sm="6">
      <Modal />
    </v-col>
    <v-col sm="6" class="d-flex">
      <v-spacer></v-spacer>
      <SaveBtns />
    </v-col>
  </v-row>

  <!-- Statistique des membres  -->
  <v-row>
    <h1 class="col-6">Statistique des membres</h1>
  </v-row>

  <!-- Nom de l'équipe  -->
  <v-row>
    <h2 class="col-6">HillClimbersFr</h2>
  </v-row>
  
  <!-- selecteur d'events  -->
  <v-row>
    <v-col md="9" sm="6" cols="12">
      <v-select
        :items="eventsItems"
        v-model="events"
        label="events"
      />
    </v-col>
    <!--
      New event => va récupérer en Bdd l'event s'il exite
      Affiche le prochain event pour les équipes qui sont en S4
    -->
    <v-col md="3" sm="6" cols="12" class="event-btn-container">
      <NewEvent @new-event-created="newEventCreatedFn" />
    </v-col>
  </v-row>

  <v-row v-if="dataPulledSuccefuly">
    <!-- Meilleurs scores : filtre tous les scores d'1 joueurs,
    retourne le meilleur puis compare avec tous les autres joueurs et
    retourne le meilleur score + nom du joueur -->
    <v-col cols="12" sm="6" lg="2">
      <TableBestParticipation :recordName="'pts'" :recordTitle="'Les plus actifs'" />
      <TableBestRecords :recordKey="'km'" :recordName="'Km'" :recordTitle="'Meilleurs rouleurs'" />
    </v-col>
    <v-col class="d-none d-lg-block">
      <TableMembers :actualEvent="actualEvent" :newEventCreated="newEventCreated" />
    </v-col>
    <v-col cols="12" sm="6" lg="2">
      <TableBestRecords :recordKey="'score'" :recordName="''" :recordTitle="'Meilleurs scoreurs'" />
      <TableBestRecords :recordKey="'pts'" :recordName="'pts'" :recordTitle="'Meilleurs au point'" />
    </v-col>
    <v-col md="12" class="d-lg-none">
      <TableMembers :actualEvent="actualEvent" />
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import Modal from '../components/Modal.vue'
import NewEvent from '../components/NewEvent.vue'
import SaveBtns from '../components/SaveBtns.vue'
import TableMembers from '../components/TableMembers.vue'
import TableBestParticipation from '../components/Tables/TableBestParticipation.vue'
import TableBestRecords from '../components/Tables/TableBestRecords.vue'
  import firebaseInit from '../components/Firebase/FirebaseInit.js'
  import { getFirestore, doc, getDoc } from "firebase/firestore"

  export default {
    name: 'Home',
    data () {
      return {
        actualEvent: {},
        actualEventIndex: null,
        allEvents: null, // datas API provenant du store
        eventsItems: [],
        events: "",
        newEventCreated: false,
        dataPulledSuccefuly: false
      }
    },
    computed: {
      // allEvents () {
      //   return this.$store.getters.getEvents
      // },
      actualEventFn () {
        return this.actualEvent
      }
    },
    components: {
      TableMembers,
      TableBestRecords,
      NewEvent,
      TableBestParticipation,
      Modal,
      SaveBtns,
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
      },
    },
    created () {
      this.pullDatas()
        .then(() => {
          this.initEvent()
          this.allEvents.map((event, index) => {
            if (event.eventName) {
              this.actualEvent.name = event.eventName
              this.actualEvent.date = event.start + " - " + event.end
              this.actualEvent.index = index
            }
          })
        })
        .then(() => {
          // une fois qu'on est sur que tout est bien récupéré on affiche les tableau
          this.dataPulledSuccefuly = true
        })
    },
    methods: {
      initEvent () {
        this.allEvents = this.$store.getters.getEvents
        this.allEvents.map(event => {
          this.eventsItems.push(event.eventName)
        })
      },
      async pullDatas () {
        const teamId = window.location.pathname.split('/')[2]
        try {
          const db = getFirestore(firebaseInit)
          const teamRef = doc(db, "teams", teamId)
          const docSnap = await getDoc(teamRef)
          
          // On vérifie que l'équipe existe bien et que l'array players existe
          if (docSnap.exists()) {
            if (docSnap.data().players != undefined) {
              const playersStored = docSnap.data().players
              this.$store.dispatch('setPlayers', playersStored)
              // console.log('playersStored', docSnap)
              
              this.dataPullSuccess = true
              setTimeout(() => {
                this.dataPullSuccess = false
                this.dataPullConfirm = false
                console.log('data pullé')
              }, 4000)
            }
            if (docSnap.data().events != undefined) {
              const eventsStored = docSnap.data().events
              this.$store.dispatch('setEvents', eventsStored)
            }
          } else {
            this.nodataFound = true
            console.log('aucune donnée trouvée')
          }
        } catch (e) {
          console.log('catched', e)
          this.alertFailed = true
          this.dataPullConfirm = false
          this.dataPullSuccess = false
        }
      },
      newEventCreatedFn () {
        this.initEvent()
        // console.log(this.$store.getters.getPlayers)
        // on trigger de suite le selecteur d'events avec la nouvelle valeur
        this.events = this.allEvents[this.allEvents.length - 1].eventName
        // on initie le nouveau tableau avec les joueurs actifs de l'équipe
        this.newEventCreated = true
        const players = this.$store.getters.getPlayers
        players.map(player => {
          if (!player.kicked) {
            player.stats.push(
              {
                eventName: this.events,
                eventParts : [
                  {
                    score: 0,
                    km: 0,
                    pts: 0,
                  },
                  {
                    score: 0,
                    km: 0,
                    pts: 0,
                  },
                  {
                    score: 0,
                    km: 0,
                    pts: 0,
                  },
                  {
                    score: 0,
                    km: 0,
                    pts: 0,
                  }
                ],
                moyenne: 0,
                bestRecord: 0,
                bestKm: 0,
                bestPts: 0,
              }
            )
          }
          // return players
        })
        // this.$store.dispatch('setPlayers', players)
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
