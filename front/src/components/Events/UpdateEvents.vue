<template>
  <v-row justify="space-around">
    <v-col cols="auto" class="new-event_btn-container">
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        max-width="600"
        v-if="uuid && user.role === 'leader'"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mb-0" color="green" v-bind="attrs" v-on="on" @click="showPickerFn">
            Modifier l'event
            <v-icon small>
              mdi-pen
            </v-icon>
          </v-btn>
        </template>

        <template v-if="showPicker">
          <v-card>
            <v-toolbar color="primary" dark >Créer un nouvel event</v-toolbar>
            <!-- Champs input de la modal  -->
            <v-card-text>
              <v-container>
                <v-row>      
                  <!-- Msg d'alert -->
                  <v-col cols="12">
                    <p class="warning" v-if="showDateError">{{ showDateErrorMsg }}</p>
                  </v-col>
                  <v-col cols="12">
                    <h2>Nom de l'event</h2>
                    <v-text-field v-model="actualEvent" />
                  </v-col>
                  <v-col cols="12">
                    <h2 class="mb-9">Durée de l'event</h2>
                    <DatePicker @emit-dates="getDates" />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            
            <!-- Btns actions  -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="close">Close</v-btn>
              <SaveBtns />
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
  import DatePicker from '../DatePicker.vue'
  import SaveBtns from '../SaveBtns.vue'
  // import firebaseInit from '../Firebase/FirebaseInit.js'
  // import { getFirestore, doc, getDoc } from "firebase/firestore"

  export default {
  components: { DatePicker, SaveBtns },
    data () {
      return {
        dialog: false,
        teamId: '',
        newEventName: null,
        newEventDates: '',
        dateToUpdate: '',
        showPicker: false,
        showDateError: false,
        showDateErrorMsg: "Merci de choisir un interval de date : du 11/11/21 au 18/11/21 par ex et de rentrer un nom d'event",
      }
    },
    computed: {
      uuid () {
       return this.$store.getters.getUuid
      },
      user () {
       return this.$store.getters.getUser
      },
      events () {
       return this.$store.getters.getEvents
      },
      actualEvent: {
        get: function () {
          const events = this.$store.getters.getEvents
          const actualEvent = events.filter(event => event.actualEvent)
          return actualEvent[0].eventName
        },
        set: function (newValue) {
          this.newEventName = newValue
        }
      }
    },
    methods: {
      showPickerFn () {
        // detruit le picker pour éviter les erruers
        this.showPicker = true
      },
      getDates (payload) {
        this.newEventDates = payload
      },
      // async getEventDatasFirestore () {
      //   try {
      //     const db = getFirestore(firebaseInit)
      //     const docRef = doc(db, "teams", this.user.teamId);
      //     const docSnap = await getDoc(docRef);
      //     // let teamEvents = []

      //     if (docSnap.exists()) {
      //       const teamDatas = docSnap.data()
      //       const teamEvents = teamDatas.events
            
      //       teamEvents.map(event => {
      //         if (event.actualEvent) {
      //           this.newEventName = event.eventName
      //           this.dateToUpdate = [event.start, event.end]
      //         }
      //       })
      //     } else {
      //       console.log("No such document!");
      //     }
      //   } catch (err) {
      //     console.log(err)
      //   }
      // },
      save () {
        if (this.newEventDates.length === 2 && this.newEventName != null) { // gestion des erreurs utilisateur
          // mettre à jour le store
          const events = this.events
          const players = this.$store.getters.getPlayers

          // this.newEventName = events[events.length - 1].eventName
          // console.log(this.newEventDates, this.newEventName)
          // console.log(events)
          // const docRef = doc(db, "teams", this.user.teamId)
          
          let actualEventIndex = null // techniquement l'actualEvent sera toujours le dernier rajouté
          // on map pour récupérer l'actualEvent
          events.map((event, index) => {
            if (event.actualEvent) {
              actualEventIndex = index
            }
          })
          // console.log('index', actualEventIndex)
          
          // On filtre pour modifier l'actualEvent
          const actualEvent = events.filter(event => event.actualEvent)

          // on met à jour les players avec le nom du nouvel event
          players.map(player => {
            // on récupère le dernier event
            if (player.stats[player.stats.length - 1].eventName === actualEvent[0].eventName) {
              player.stats[player.stats.length - 1].eventName = this.newEventName
              // console.log(player)
            }
          })

          // on modifie le nom de l'ancien event avec le nouveau nom
          if (actualEvent.length > 0) {
            actualEvent[0].eventName = this.newEventName
            actualEvent[0].start = this.newEventDates[0]
            actualEvent[0].end = this.newEventDates[1]
          }

          // console.log(actualEventIndex)
          events.splice(actualEventIndex, 1)
          events.push(...actualEvent)
          // console.log(events)
          
          const setEvent = this.$store.dispatch('setEvents', events)
          setEvent
          .then(() => {
            // console.log(this.$store.getters.getEvents)

            // await updateDoc(docRef, {
            //   events: events,
            //   plyaers: players
            // });
            // console.log('ok')
          })
          
          // const newEventDatas = {
          //   eventName: this.newEventName,
          //   start: this.newEventDates[0],
          //   end: this.newEventDates[1],
          //   actualEvent: true,
          // }
          // this.$store.dispatch('createNewEvent', newEventDatas)

          // on emet au parent les infos qu'il va transmettre aux enfants afin de réinitialiser le tableau
          this.$emit('event-updated', events)
          
          // this.newEventName = this.newEventDates = ''
          // this.showPicker = false
          // this.showDateError = false

          // this.close()
        } else {
          this.showDateError = true
        }
      },
      close () {
        this.showDateError = false
        this.dialog = false
      }
    },
  }
</script>

<style lang="scss" scoped>
.new-event_btn-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
