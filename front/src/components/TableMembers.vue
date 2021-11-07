<template>
    <!-- loading
    loading-text="Loading... Please wait" -->
  <v-data-table
    :headers="headers"
    :items="players"
    sort-by="calories"
    class="elevation-1"
  >
    <!-- Dialogs  -->
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Membres de l'équipe</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        
        <!-- Create  -->
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Joueur
              <v-icon small>
                mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            
            <!-- Champs input de la modal  -->
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-text-field v-model="editedItem.nickname" label="Pseudo" />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field v-model="editedItem.id" label="Id" />
                  </v-col>
                  <v-col cols="12">
                    <v-select 
                      :items="gradeItems"
                      v-model="grade"
                      label="Grade"
                      required
                    />
                  </v-col>
                  <v-col cols="3">
                    <v-text-field type="number" v-model="editedItem.score1" label="score1" />
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
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Delete  -->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    
    <template v-slot:item.nickname="{ item }">
      <v-icon v-if="item.grade.leader" small color="primary" class="mb-1">mdi-account-tie</v-icon>
      <v-icon v-if="item.grade.coleader" small color="secondary" class="mb-1">mdi-account-supervisor</v-icon>
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
          {{ item.moyenne.score }}
        </span>
        <span class="km">
          {{ item.moyenne.km }} Km
        </span>
        <span class="pts">
          {{ item.moyenne.pts }} pts
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
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>


<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'Joueurs', align: 'center', value: 'nickname',},
        { text: 'Score1', align: 'center', value: 'score1' },
        { text: 'Score2', align: 'center', value: 'score2' },
        { text: 'Score3', align: 'center', value: 'score3' },
        { text: 'Score4', align: 'center', value: 'score4' },
        { text: 'Meilleur Record', align: 'center', value: 'bestRecord', class: 'best-record-header' },
        { text: 'Moyenne', align: 'center', value: 'moyenne', sortable: false  },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      players: [],
      moyenne: '',
      bestRecord: '',
      bestKm: "",
      bestPts: "",
      grade: '',
      gradeItems: ['leader', 'coLeader', 'member'],
      editedIndex: -1,
      editedItem: {
        nickname: '',
        id: "",
        actif: true,
        grade: {
          leader: false,
          coleader: false,
          member: false,
        },
        eventName: "",
        score1: "",
        score2: "",
        score3: "",
        score4: "",
        moyenne: "",
        bestRecord: "",
        bestKm: "",
        bestPts: "",
        km1: "",
        km2: "",
        km3: "",
        km4: "",
        pts1: "",
        pts2: "",
        pts3: "",
        pts4: "",
      },
      defaultItem: {
        nickname: '',
        id: "",
        actif: true,
        grade: {
          leader: false,
          coleader: false,
          member: false,
        },
        eventName: "",
        score1: "",
        score2: "",
        score3: "",
        score4: "",
        moyenne: "",
        bestRecord: "",
        bestKm: "",
        bestPts: "",
        km1: "",
        km2: "",
        km3: "",
        km4: "",
        pts1: "",
        pts2: "",
        pts3: "",
        pts4: "",
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      }
    },

    created () {
      // Requete
      // récupérer la liste de tous les players
      // Si le joueur est actif durant l'event alors on l'affiche sinon non -> cas d'un player qui a quitté l'équipe
      this.initialize()
      this.calculMoyenne()
      this.calculBestScore('score1', 'score2', 'score3', 'score4', 'bestRecord')
      this.calculBestScore('km1', 'km2', 'km3', 'km4', 'bestKm')
      this.calculBestScore('pts1', 'pts2', 'pts3', 'pts4', 'bestPts')
    },

    mounted () {
    },

    methods: {
      initialize () {
        this.players = [
          {
            nickname: "Joh",
            id: "1255fds2",
            grade: {
              leader: true,
              coleader: false,
              member: false,
            },
            actif: false,
            eventName: "Jus de citrouille",
            score1: 10000,
            score2: 20000,
            score3: 3000,
            score4: 3009,
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
            km1: 100,
            km2: 450,
            km3: 200,
            km4: 0,
            pts1: 100,
            pts2: 200,
            pts3: 300,
            pts4: 60,
          },
          {
            nickname: "Jess",
            id: "1255fds3",
            grade: {
              leader: false,
              coleader: true,
              member: false,
            },
            actif: true,
            eventName: "Jus de citrouille",
            score1: 10386,
            score2: 15251,
            score3: 16021,
            score4: 16029,
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
            km1: 358,
            km2: 100,
            km3: 100,
            km4: 0,
            pts1: 300,
            pts2: 300,
            pts3: 300,
            pts4: 60,
          },
          {
            nickname: "Jack",
            id: "1255fds4",
            grade: {
              leader: false,
              coleader: false,
              member: true,
            },
            actif: true,
            eventName: "Jus de citrouille",
            score1: 27002,
            score2: 28000,
            score3: 25000,
            score4: 30009,
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
            km1: 2500,
            km2: 100,
            km3: 100,
            km4: 0,
            pts1: 300,
            pts2: 300,
            pts3: 300,
            pts4: 60,
          }
        ]
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

      deleteItemConfirm () {
        this.players.splice(this.editedIndex, 1)
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
        if (this.editedIndex > -1) {
          Object.assign(this.players[this.editedIndex], this.editedItem)
        } else {
          this.players.push(this.editedItem)
        }
        this.calculMoyenne()
        this.calculBestScore('score1', 'score2', 'score3', 'score4', 'bestRecord')
        this.calculBestScore('km1', 'km2', 'km3', 'km4', 'bestKm')
        this.calculBestScore('pts1', 'pts2', 'pts3', 'pts4', 'bestPts')
        this.close()
      },

      calculMoyenne () {
        let score = ''
        let km = ''
        let pts = ''
        
        this.players.map(data => {
          score = (Math.round(parseInt(data.score1) + parseInt(data.score2) + parseInt(data.score3) + parseInt(data.score4)) / 4).toFixed(0)
          km = (Math.round(parseInt(data.km1) + parseInt(data.km2) + parseInt(data.km3) + parseInt(data.km4)) / 4).toFixed(0)
          pts = (Math.round(parseInt(data.pts1) + parseInt(data.pts2) + parseInt(data.pts3) + parseInt(data.pts4)) / 4).toFixed(0)

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
          // console.log(scores)
          console.log(scores[scores.length - 1])
          
          data[item] = scores[scores.length - 1]
        })
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
      background-color: #6ba8f5;
      color: #fff;
    }
  }

  ::v-deep {
    .best-record-header {
      display: flex;
      overflow: hidden;
      background-color: #4b82d6;

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
  }
  .nickname-title {
    font-size: 15px;
    font-weight: 700;
  }
</style>