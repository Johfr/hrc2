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
          <v-btn class="mb-0" color="primary" v-bind="attrs" v-on="on" @click="showPickerFn">
            Nouvel event
            <v-icon small>
              mdi-plus
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
                    <v-text-field v-model="newEventName" />
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
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
  import DatePicker from './DatePicker.vue'
  // import firebaseInit from './Firebase/FirebaseInit.js'
  // import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore"
  export default {
  components: { DatePicker },
    data () {
      return {
        dialog: false,
        teamId: '',
        newEventName: null,
        newEventDates: '',
        showPicker: false,
        showDateError: false,
        showDateErrorMsg: "Merci de choisir un interval de date : du 11/11/21 au 18/11/21 par ex et de rentrer un nom d'event",
      }
    },
    // created () {
    //   this.teamId = window.location.pathname.split('/')[2]
    // },
    computed: {
      uuid () {
       return this.$store.getters.getUuid
      },
      user () {
       return this.$store.getters.getUser
      },
    },

    watch: {
    },
    mounted () {
    },
    methods: {
      showPickerFn () {
        // detruit le picker pour éviter les erruers
        this.showPicker = true
      },
      getDates (payload) {
        this.newEventDates = payload
      },
      save () {
        if (this.newEventDates.length === 2 && this.newEventName != null) {
          const newEventDatas = { 
            eventName: this.newEventName,
            start: this.newEventDates[0],
            end: this.newEventDates[1],
            actualEvent: true,
          }
          this.$store.dispatch('createNewEvent', newEventDatas)

          // on emet au parent les infos qu'il va transmettre aux enfants afin de réinitialiser le tableau
          this.$emit('new-event-created')
          
          this.newEventName = this.newEventDates = ''
          this.showPicker = false
          this.showDateError = false

          this.close()
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
