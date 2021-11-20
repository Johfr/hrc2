<template>
    <!-- loading
    loading-text="Loading... Please wait" -->
    <div>
      <!-- {{ allPlayers[1].stats[allPlayers[1].stats.length - 1].eventName }} -->
    <v-data-table
      :headers="headers"
      :items="players"
      :item-class= "row_classes"
      sort-by="calories"
      class="elevation-1"
    >
      <!-- Dialogs  -->
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Event en cours</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>

          <v-toolbar-title>
            <span class="title_event-name">
              <h2 class="title-h2">{{ actualEventSelected ? actualEventSelected.name : $store.getters.getActualEvent.eventName }}</h2>
            </span>
            <span class="title_event-date">
              {{ actualEventSelected ? actualEventSelected.date : $store.getters.getActualEvent.start + " - " + $store.getters.getActualEvent.end }} 
            </span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          
          <!-- modal Create / Update -->
          <v-dialog
            v-model="dialog"
            max-width="500px"
            v-if="uuid && user.role === 'leader'"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                @click="generateId"
              >
                Joueur
                <v-icon small>
                  mdi-plus
                </v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle.name }}</span>
              </v-card-title>
              
              <!-- Champs input de la modal  -->
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field v-model="editedItem.nickname" label="Pseudo" />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="editedItem.id" label="Id" disabled />
                    </v-col>
                    {{ editedItem }}
                    <v-col cols="12">
                      <v-select 
                        :items="gradeItems"
                        v-model="editedItem.grade"
                        label="Grade"
                        required
                      />
                    </v-col>
                    <v-col cols="3">
                      <v-text-field type="number" v-model="editedItem.score1" label="score1" :value="'12336'" />
                    </v-col>
                    <v-col cols="3">
                      <v-text-field type="number" v-model="editedItem.score2" label="score2" />
                    </v-col>
                    <v-col cols="3">
                      <v-text-field type="number" v-model="editedItem.score3" label="score3" />
                    </v-col>
                    <v-col cols="3">
                      <v-text-field type="number" v-model="editedItem.score4" label="score4" />
                    </v-col>
                    <!-- <v-col cols="4">
                      <v-text-field v-mo type="number"del="editedItem.moyenne" label="Moyenne" />
                    </v-col> -->
                    <v-col cols="3">
                      <v-text-field type="number" v-model="editedItem.km1" label="km1" />
                    </v-col>
                    <v-col cols="3">
                      <v-text-field type="number" v-model="editedItem.km2" label="km2" />
                    </v-col>
                    <v-col cols="3">
                      <v-text-field type="number" v-model="editedItem.km3" label="km3" />
                    </v-col>
                    <v-col cols="3">
                      <v-text-field type="number" v-model="editedItem.km4" label="km4" />
                    </v-col>
                    <v-col cols="3">
                      <v-text-field type="number" v-model="editedItem.pts1" label="pts1" />
                    </v-col>
                    <v-col cols="3">
                      <v-text-field type="number" v-model="editedItem.pts2" label="pts2" />
                    </v-col>
                    <v-col cols="3">
                      <v-text-field type="number" v-model="editedItem.pts3" label="pts3" />
                    </v-col>
                    <v-col cols="3">
                      <v-text-field type="number" v-model="editedItem.pts4" label="pts4" />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              
              <!-- Btns actions  -->
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Ajouter
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- modal Delete  -->
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Expulser ce joueur ?</v-card-title>
              <v-card-text>
                Ce joueur sera indiqué comme kické et apparaitra uniquement sur les events auxquels il a joué.
              </v-card-text>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field v-model="editedItem.nickname" label="Pseudo" disabled/>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="editedItem.id" label="Id" disabled/>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm({name: editedItem.nickname, id: editedItem.id})">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      
      <template v-slot:item.nickname="{ item, index }">
        #{{ index + 1 }}
        {{ item.grade }}
        <v-icon v-if="item.grade === 'leader'" small color="primary" class="mb-1">mdi-account-tie</v-icon>
        <v-icon v-if="item.grade === 'coleader'" small color="secondary" class="mb-1">mdi-account-supervisor</v-icon>
        <!-- <v-icon v-if="item.member" small>mdi-account-group</v-icon> -->
        <span class="nickname-title">
          {{ item.nickname }}
        </span>
      </template>
      
      <template v-slot:item.score1="{ item }">
        <div class="column-item-container">
          <span class="score">
            {{ item.score1 }}
            <v-icon small color="#e52c2c" v-if="item.score1 > 30000">
              mdi-star
            </v-icon>
          </span>
          <span class="km">
            {{ item.km1 }} Km
          </span>
          <span class="pts">
            {{ item.pts1 }} pts
          </span>
        </div>
      </template>
      
      <template v-slot:item.score2="{ item }">
        <div class="column-item-container">
          <span class="score">
            {{ item.score2 }}
            <v-icon small color="#e52c2c" v-if="item.score2 > 30000">
              mdi-star
            </v-icon>
          </span>
          <span class="km">
            {{ item.km2 }} Km
          </span>
          <span class="pts">
            {{ item.pts2 }} pts
          </span>
        </div>
      </template>
      
      <template v-slot:item.score3="{ item }">
        <div class="column-item-container">
          <span class="score">
            {{ item.score3 }}
            <v-icon small color="#e52c2c" v-if="item.score3 > 30000">
              mdi-star
            </v-icon>
          </span>
          <span class="km">
            {{ item.km3 }} Km
          </span>
          <span class="pts">
            {{ item.pts3 }} pts
          </span>
        </div>
      </template>
      
      <template v-slot:item.score4="{ item }">
        <div class="column-item-container">
          <span class="score">
            {{ item.score4 }}
            <v-icon small color="#e52c2c" v-if="item.score4 > 30000">
              mdi-star
            </v-icon>
          </span>
          <span class="km">
            {{ item.km4 }} Km
          </span>
          <span class="pts">
            {{ item.pts4 }} pts
          </span>
        </div>
      </template>
      
      <template v-slot:item.bestRecord="{ item }">
        <div class="column-item-container best-record">
          <span class="score">
            {{ item.bestRecord }}
          </span>
          <span class="km">
            {{ item.bestKm }} Km
          </span>
          <span class="pts">
            {{ item.bestPts }} pts
          </span>
        </div>
      </template>
      
      <template v-slot:item.moyenne="{ item }">
        <div class="column-item-container">
          <span class="score">
            {{ !isNaN(item.moyenne.score) ? item.moyenne.score : 0 }}
          </span>
          <span class="km">
            {{ !isNaN(item.moyenne.km) ? item.moyenne.km : 0 }} Km
          </span>
          <span class="pts">
            {{ !isNaN(item.moyenne.pts) ? item.moyenne.pts : 0 }} pts
          </span>
        </div>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          v-if="!item.kicked"
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          {{ reset }}
        </v-btn>
      </template>
    </v-data-table>
    </div>
</template>


<script>
  export default {
    props: {
      actualEvent: {
        type: Object,
        default: () => {}
      },
    },
    data: () => ({
      dialog: false,
      dialogDelete: false,
      reset: "Recharger",
      headers: [
        { text: 'Joueurs', align: 'center', value: 'nickname'},
        { text: 'Score1', align: 'center', value: 'score1' },
        { text: 'Score2', align: 'center', value: 'score2' },
        { text: 'Score3', align: 'center', value: 'score3' },
        { text: 'Score4', align: 'center', value: 'score4' },
        { text: 'Meilleur Record', align: 'center', value: 'bestRecord', class: 'best-record-header' },
        { text: 'Moyenne', align: 'center', value: 'moyenne', sortable: false  },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      allPlayers: null, // datas API provenant du store
      players: [], // Liste des joueurs à afficher dans le tableau
      scores: [],
      moyenne: '',
      bestRecord: '',
      bestKm: "",
      bestPts: "",
      grade: '',
      gradeItems: ['leader', 'coleader', 'member'],
      editedIndex: -1,
      editedItem: {
        nickname: '',
        id: "",
        kicked: false,
        grade: '',
        eventName: "",
        score1: 0,
        score2: 0,
        score3: 0,
        score4: 0,
        moyenne: "",
        bestRecord: "",
        bestKm: "",
        bestPts: "",
        km1: 0,
        km2: 0,
        km3: 0,
        km4: 0,
        pts1: 0,
        pts2: 0,
        pts3: 0,
        pts4: 0,
      },
      defaultItem: {
        nickname: '',
        id: "",
        kicked: false,
        grade: '',
        eventName: "",
        score1: 0,
        score2: 0,
        score3: 0,
        score4: 0,
        moyenne: "",
        bestRecord: "",
        bestKm: "",
        bestPts: "",
        km1: 0,
        km2: 0,
        km3: 0,
        km4: 0,
        pts1: 0,
        pts2: 0,
        pts3: 0,
        pts4: 0,
      },
    }),
    computed: {
      formTitle () {
        return this.actualEventSelected || this.actualEvent
      },
      actualEventSelected () {
        // console.log('watch store event selected', this.$store.state.eventSelected)
        return this.$store.state.eventSelected
      },
      playersDatas () {
        return this.actualEvent.date
      },
      uuid () {
       return this.$store.getters.getUuid
      },
      user () {
       return this.$store.getters.getUser
      },
      // getStorePlayers () {
      //   return this.$store.state.players
      // }
    },
    // mounted () {
    //   console.log(this.players)
    // },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
      actualEventSelected () {
        this.players = []
        
        this.allEvents.map((event) => {
          if (event.eventName === this.actualEventSelected.name) {

            this.allPlayers.map((player) => {
              player.stats.map((stat, i) => {
                if (event.eventName === stat.eventName) {
                  const actualEventIndex = i
                  // this.defaultItem.grade.leader = player.grade.leader
                  // this.defaultItem.grade.coleader = player.grade.coleader
                  // this.defaultItem.grade.member = player.grade.member
                  this.players.push({
                    nickname: player.nickname,
                    id: player.id,
                    grade: player.grade,
                    kicked: player.kicked,
                    eventName: stat.eventName,
                    score1: player.stats[actualEventIndex].eventParts[0].score,
                    score2: player.stats[actualEventIndex].eventParts[1].score,
                    score3: player.stats[actualEventIndex].eventParts[2].score,
                    score4: player.stats[actualEventIndex].eventParts[3].score,
                    moyenne: 0,
                    bestRecord: 0,
                    bestKm: 0,
                    bestPts: 0,
                    km1: player.stats[actualEventIndex].eventParts[0].km,
                    km2: player.stats[actualEventIndex].eventParts[1].km,
                    km3: player.stats[actualEventIndex].eventParts[2].km,
                    km4: player.stats[actualEventIndex].eventParts[3].km,
                    pts1: player.stats[actualEventIndex].eventParts[0].pts,
                    pts2: player.stats[actualEventIndex].eventParts[1].pts,
                    pts3: player.stats[actualEventIndex].eventParts[2].pts,
                    pts4: player.stats[actualEventIndex].eventParts[3].pts,
                  })
                }
              })
            })
          }
          
        })
        // console.log('this.players', this.players)
      
        this.calculBestScore('score1', 'score2', 'score3', 'score4', 'bestRecord')
        this.calculBestScore('km1', 'km2', 'km3', 'km4', 'bestKm')
        this.calculBestScore('pts1', 'pts2', 'pts3', 'pts4', 'bestPts')
        this.calculMoyenne()
      },
      // getStorePlayers () {
      //   this.allPlayers = this.getStorePlayers
      // }
    },
    created () {
      this.allPlayers = this.$store.getters.getPlayers //this.getStorePlayers
      
      // console.log(this.allPlayers)
      this.initialize() // initie l'index de l'event
    },
    // mounted () {
    //   console.log("mont", this.$store.getters.getActifPlayers)
    // },
    methods: {
      initialize () {
        // this.pullDatas()
        // .then(() => {
          this.allPlayers = this.$store.getters.getPlayers 
          this.allEvents = this.$store.getters.getEvents
          this.calculPlayersDatasByEvent()
        // })
      },
      calculPlayersDatasByEvent () {
        this.allEvents.map((event) => {
          if (event.actualEvent) {            
            this.allPlayers.map((player) => {
              player.stats.map((stat, i) => {
                if (event.eventName === stat.eventName) {
                  const actualEventIndex = i
                  this.players.push({
                    nickname: player.nickname,
                    id: player.id,
                    grade: player.grade,
                    kicked: player.kicked,
                    eventName: stat.eventName,
                    score1: player.stats[actualEventIndex].eventParts[0].score,
                    score2: player.stats[actualEventIndex].eventParts[1].score,
                    score3: player.stats[actualEventIndex].eventParts[2].score,
                    score4: player.stats[actualEventIndex].eventParts[3].score,
                    moyenne: 0,
                    bestRecord: 0,
                    bestKm: 0,
                    bestPts: 0,
                    km1: player.stats[actualEventIndex].eventParts[0].km,
                    km2: player.stats[actualEventIndex].eventParts[1].km,
                    km3: player.stats[actualEventIndex].eventParts[2].km,
                    km4: player.stats[actualEventIndex].eventParts[3].km,
                    pts1: player.stats[actualEventIndex].eventParts[0].pts,
                    pts2: player.stats[actualEventIndex].eventParts[1].pts,
                    pts3: player.stats[actualEventIndex].eventParts[2].pts,
                    pts4: player.stats[actualEventIndex].eventParts[3].pts,
                  })
                }
              })
            })
          }
        })
        
        this.calculMoyenne()
        this.calculBestScore('score1', 'score2', 'score3', 'score4', 'bestRecord')
        this.calculBestScore('km1', 'km2', 'km3', 'km4', 'bestKm')
        this.calculBestScore('pts1', 'pts2', 'pts3', 'pts4', 'bestPts')
      },
      calculMoyenne () {
        let score = ''
        let km = ''
        let pts = ''

        let divisor = 3
        this.players.map(player => {
          if (player.score4 > 0) {
            divisor = 4
          }
        })
        this.players.map(data => {
          score = (Math.round(parseInt(data.score1) + parseInt(data.score2) + parseInt(data.score3) + parseInt(data.score4)) / divisor).toFixed(0)
          km = (Math.round(parseInt(data.km1) + parseInt(data.km2) + parseInt(data.km3) + parseInt(data.km4)) / divisor).toFixed(0)
          pts = (Math.round(parseInt(data.pts1) + parseInt(data.pts2) + parseInt(data.pts3) + parseInt(data.pts4)) / divisor).toFixed(0)

          data.moyenne = {score, km, pts}
        })
      },
      calculBestScore (key1 = 0, key2 = 0, key3 = 0, key4 = 0, item) { // affiche le meilleur score parmis les 4
        this.players.map(data => {
          let scores = []
          
          scores.push(data[key1], data[key2], data[key3], data[key4])

          scores.sort(function(a, b) {
            return a - b;
          })
          
          data[item] = scores[scores.length - 1]
        })
      },
      generateId () {
        this.editedItem.id = 'HCFR-' + (this.players.length + 1)
      },
      editItem (item) {
        this.editedIndex = this.players.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.calculMoyenne()
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.players.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm (item) {
        // this.players.splice(this.editedIndex, 1)
        this.$store.dispatch('kickPlayer', item)
          .then(() => {
            this.players = []
            this.calculPlayersDatasByEvent()
          })

        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) { // Modif dun joueur existant
          // this.editedItem.grade = this.grade
          // {
          //   leader: this.grade === "leader",
          //   coleader: this.grade === "coleader",
          //   member: this.grade === "member",
          // }
          console.log(this.editedItem)
          Object.assign(this.players[this.editedIndex], this.editedItem)
        } else { // ajout d'un nouveau joueur
          // this.editedItem.grade = this.grade
          // {
          //   leader: this.grade === "leader",
          //   coleader: this.grade === "coleader",
          //   member: this.grade === "member",
          // }
          console.log(this.editedItem)
          this.players.push(this.editedItem)
        }
        // on stocke dans le store
        if (this.actualEventSelected !== null) { // via le selecteur d'event
          this.editedItem.eventName = this.actualEventSelected.name
        } else { // via la props
          this.editedItem.eventName = this.actualEvent.name
        }

        this.$store.dispatch('updatePlayers', this.editedItem)
        this.calculMoyenne()
        this.calculBestScore('score1', 'score2', 'score3', 'score4', 'bestRecord')
        this.calculBestScore('km1', 'km2', 'km3', 'km4', 'bestKm')
        this.calculBestScore('pts1', 'pts2', 'pts3', 'pts4', 'bestPts')
        this.close()
      },
      row_classes(item) {
        if (item.kicked) {
          return "kicked"
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .column-item-container {
    display: flex;
    flex-direction: column;
    padding: 5px 0;

    .score {
      font-size: 18px;
      font-weight: 700;
    }
    .km {
      opacity: 0.8;
    }
    .pts {
      opacity: 0.6;
    }

    &.best-record {
      background-color: #acce5f;
      color: #fff;
    }
  }
  .nickname-title {
    font-size: 15px;
    font-weight: 700;
  }
  .title-h2 {
    display: inline-block;
  }

  ::v-deep {
    .title_event-name {
      font-weight: 700;
      text-transform: uppercase;
    }
    .best-record-header {
      display: flex;
      overflow: hidden;
      background-color: #acce5f;

      span {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }

      i[aria-hidden="true"].v-data-table-header__icon {
        opacity: 1;

        &::before {
          color: #fff;
        }
      }
    }
    .kicked {
      background-color: #e52c2c;
      color: #fff;

      &:hover {
        background-color: #e52c2c !important;
      }
    }
  }
</style>