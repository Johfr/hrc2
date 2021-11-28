<template>
<v-container>
  <!-- Info -->
  <v-row>
    <v-btn @click="showInfo = !showInfo; showHowTo ? showHowTo = !showHowTo : '' ">Info</v-btn>
    <v-btn @click="showHowTo = !showHowTo; showInfo ? showInfo = !showInfo : '' ">Comment rentrer les données</v-btn>
  </v-row>
  <v-row>
    <div v-show="showInfo" class="col-6" v-if="user.role === 'leader'">
      <h3 class="mb-0">Bienvenue sur la page de gestion de l'équipe</h3>
      <ol class="info-list">
        <li class="mb-0">Avant toute chose il te faut créer un event en cliquant sur "nouvel event"</li>
        <li class="mb-0">Rentre le nom de l'event en cours ainsi que la durée total de l'event. Si l'event dure 7 jours rentre les 7 jours</li>
        <li class="mb-0">Une fois créé tu pourras rajouter les joueurs en spécifiant leur pseudo, leur grade et leurs stats</li>
        <li class="mb-0 warning">L'étape la plus cruciale : Pense bien à sauvegarder après toutes modifications sinon tes saisies seront perdues :/</li>
        <li class="mb-0">Une fois l'event en cours terminé tu pourras en créer un nouveau. Note qu'en créant un event celui-ci est automatiquement défini comme l'event en cours.</li>
        <li class="mb-0">A la création d'un nouvel event tous les joueurs actifs de ton équipe (non kickés) seront automatiquement affichés !"</li>
        <li class="mb-0 info">Ne crée un nouvel event que lorsque le précédent est fini</li>
        <li class="mb-0 warning">2 fois vaut mieux qu'une, pense bien à sauvegarder tes modifications ;)</li>
        <li class="mb-0">Tu peux réduire les infos en cliquant sur le bouton 'INFO' juste au-dessus !</li>
      </ol>
    </div>

    <div v-show="showHowTo" class="col-6" v-if="user.role === 'leader'">
      <h3 class="mb-0">Comment rentrer les données</h3>
      <ol class="info-list">
        <li class="mb-0">
          Les scores et les points correspondent au tableau des VS inGame. Tu vas pouvoir rentrer les 2 données en même temps. Le total des points sera calculé automatiquement
          <img class="info-img" src="/img/team_vs.jpg" alt="">
        </li>
        <li class="mb-0">Les termes km1, score1, pts1 etc. correspondent aux VS auxquels ton équipe à participé</li>
        <li class="mb-0">Un event dure 7 jours. Un VS dure 2 jours. Tu vas pouvoir rentrer jusqu'à 4 VS</li>
        <ul class="info-sublist">
          <li class="mb-0">VS1 = score1, km1, pts1</li>
          <li class="mb-0">VS2 = score2, km2, pts2</li>
          <li class="mb-0">VS3 = score3, km3, pts3</li>
          <li class="mb-0">VS4 = score4, km4, pts4</li>
        </ul>
        <li class="mb-0">
          Les kms se trouvent dans l'onglet de l'équipe
          <img class="info-img" src="/img/team_km.png" alt="">
        </li>
        <li class="mb-0 info">Les données doivent être rentrées uniquement à la fin du VS</li>
        <li class="mb-0 warning">Pense bien à sauvegarder tes modifications via le bouton "sauvegarder" ;)</li>
      </ol>
    </div>
  </v-row>

  <!-- Nom de l'équipe  -->
  <v-row>
    <h2 class="col-6">HillClimbersFr</h2>
  </v-row>

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

  <!-- Statistique des membres  -->
  <v-row>
    <h1 class="col-6">Statistiques des membres</h1>
  </v-row>

  <v-row v-if="dataPulledSuccefuly">
    <!-- Meilleurs scores : filtre tous les scores d'1 joueurs,
    retourne le meilleur puis compare avec tous les autres joueurs et
    retourne le meilleur score + nom du joueur -->
    <v-col cols="12" sm="6" lg="3">
      <TableBestParticipation :recordName="'pts'" :recordTitle="'Les plus actifs'" />
      <TableBestRecords :recordKey="'km'" :recordName="'Km'" :recordTitle="'Meilleurs rouleurs'" />
    </v-col>
    <v-col class="d-none d-lg-block" lg="7">
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
    name: 'TeamPage',
    data () {
      return {
        showInfo: false,
        showHowTo: false,
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
      },
      user () {
        return this.$store.getters.getUser
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
        // console.log(actualEvent)
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
              // console.log('playersStored', playersStored)
              
              this.dataPullSuccess = true
              setTimeout(() => {
                this.dataPullSuccess = false
                this.dataPullConfirm = false
                // console.log('data pullé')
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
  .info-img {
    display: block;
    width: 100%;
    height: auto;
  }
</style>
