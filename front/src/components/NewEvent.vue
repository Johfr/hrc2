<template>
  <v-row justify="space-around">
    <v-col cols="auto" class="new-event_btn-container">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mb-0" color="primary" v-bind="attrs" v-on="on">
            Nouvel event
            <v-icon small>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="primary" dark >Créer un nouvel event</v-toolbar>            
            <!-- Champs input de la modal  -->
            <v-card-text>
              <v-container>
                <v-row>
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
              <v-btn text @click="dialog.value = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog.value = false; save()">Save</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
  import DatePicker from './DatePicker.vue'
  export default {
  components: { DatePicker },
    data () {
      return {
        newEventName: '',
        newEventDates: '',
      }
    },
    created () {
    },
    computed: {
    },

    watch: {
    },
    mounted () {
    },
    methods: {
      getDates (payload) {
        this.newEventDates = payload
      },
      save () {
        const newEventDatas = { 
          eventName: this.newEventName,
          start: this.newEventDates[0],
          end: this.newEventDates[1],
          actualEvent: true,
        }
        
        this.$store.dispatch('createNewEvent', newEventDatas).then(() => {
          console.log('Requête vers firebase')
        })

        // on emet au parent les infos qu'il va transmettre aux enfants afin de réinitialiser le tableau
        this.$emit('new-event-created')        
        
        this.newEventName = this.newEventDates = ''

        this.dialog = false
      },
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
