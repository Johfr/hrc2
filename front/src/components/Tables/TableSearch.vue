<template>
  <v-container class="data-search-table-container">
    <v-data-table
      :headers="headers"
      :items="teams"
      sort-by="calories"
      class=""
      :search="search"
      :custom-filter="filterOnlyCapsText"
      :loading="loaded"
      loading-text="Loading... Please wait"
    >
      <template v-slot:top>
        <v-toolbar
          flat
          class="mb-5 pt-4"
        >
          <!-- SEARCH  -->
          <v-text-field
            v-model="search"
            label="Rechercher (En caractère minuscule uniquement)"
            class="mt-4"
          ></v-text-field>
          
          <v-spacer></v-spacer>
          <!-- Modal pour Creer une team -->
          <!-- <p v-if="user.role !== 'leader'">Seul les leaders peuvent créer une team</p> -->
          <!-- // retrait de la condition si pas leader  -->
          <!-- v-if="user.teamId === undefined && user.role === 'leader'" -->
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class=""
                v-bind="attrs"
                v-on="on"
              >
                Créer 
                <v-icon
                  small
                  class="ml-2"
                >
                  mdi-plus
                </v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <FormCreateTeam @newteam="save" @close="close" />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>

          <!-- Modal pour rejoindre une team -->
          <v-dialog
            v-model="dialogJoin"
            max-width="500px"
          >
            <v-card>
              <v-card-title>
                <span class="text-h5">Rejoindre {{ Object.values(editedItem).join("") }}</span>
                <span class="warning">Tu ne peux rejoindre qu'une équipe à la fois</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <FormInputCodeVerify @close="close" :teamDatas='teamDatas' />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions class="d-none">
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
                  Valider
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>

      </template>

      <template v-slot:item.actions="{ item }" v-if="uuid !== null">
        <v-btn
          elevation="2"
          small
          @click="joinTeam(item)"
          v-if="item.teamId !== user.teamId"
        >
          Rejoindre
        </v-btn>
        <router-link :to="'/teamPage/' + item.teamId">
          <!-- v-if="user.role.toLowerCase() === 'leader' && user.teamname.toLowerCase() === item.teamname.toLowerCase()" on vicon -->
          <v-icon
            class="ml-2 arrow-icon"
            v-if="item.teamId === user.teamId"
          >
            mdi-arrow-right-bold
          </v-icon>
        </router-link>
        <!-- 
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon> -->
      </template>

      <template v-slot:item.teamname="{ item, index }">
        <!-- {{ header.text }} -- -->
        #{{ index + 1 }} {{ item.teamname }}
      </template>

      <template v-slot:item.leaders="{ item }">
        <!-- {{ header.text }} -- -->
        {{ item.leaders }}
        <v-icon small>mdi-account-multiple</v-icon>
      </template>

      <template v-slot:item.membres="{ item }">
        {{ item.actifPlayers ? item.actifPlayers : "0" }}
        <v-icon small>mdi-account-multiple</v-icon>
      </template>

      <template v-slot:item.leaders="{ item }">
        {{ item.leaders ? item.leaders : "0" }}
        <v-icon small>mdi-account-multiple</v-icon>
      </template>
      
      <!-- Si aucune donnée -->
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>


<script>
  import FormCreateTeam from '../forms/FormCreateTeam.vue'
  import FormInputCodeVerify from '../forms/FormInputCodeVerify.vue'
  import firebaseInit from '../Firebase/FirebaseInit.js'
  import { getFirestore } from "firebase/firestore"
  import { collection, getDocs } from "firebase/firestore";
  
  export default {
  components: { FormCreateTeam, FormInputCodeVerify },
    data: () => ({
      loaded: true,
      dialog: false,
      dialogJoin: false,
      dialogDelete: false,
      search: '',
      headers: [
        { text: 'Equipes', value: 'teamname', align: 'start' },
        { text: 'Leaders', value: 'leaders' },
        { text: 'Division', value: 'division' },
        { text: 'Membres', value: 'membres' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      teams: [],
      teamDatas: null,
      editedIndex: -1,
      editedItem: {
        teamname: '',
        leaders: 0,
        membres: 0,
        division: '',
        teamOwner: false,
      },
      defaultItem: {
        teamname: '',
        leaders: 0,
        membres: 0,
        division: '',
        teamOwner: false,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Team' : 'Rejoindre une team'
      },
      uuid () {
        return this.$store.getters.getUuid
      },
      user () {
        return this.$store.getters.getUser
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogJoin (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      // on requete firestore pour récupérer la liste des teams
      this.initialize()
    },

    methods: {
      async initialize () {
        // on reset l'array des teams
        this.teams = []
        const db = getFirestore(firebaseInit);
        const querySnapshot = await getDocs(collection(db, "teams"))
        // console.log(doc.id, " => ", doc.data());
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          this.teams.push({...doc.data(), teamId: doc.id})
          // this.$emit('loaded')
          this.loaded = false
        });
        // this.teams = [
        //   {
        //     teamname: 'HillclimbersFr',
        //     leaders: 1,
        //     membres: 47,
        //     division: 'CC',
        //     teamOwner: true
        //   },
        //   {
        //     teamname: 'Ice cream sandwich',
        //     leaders: 1,
        //     membres: 50,
        //     division: 'Division VI',
        //     teamOwner: false
        //   },
        //   {
        //     teamname: 'Eclair',
        //     leaders: 1,
        //     membres: 32,
        //     division: 'Division III',
        //     teamOwner: false
        //   }
        // ]
      },

      // addTeam (payload) {
      //   this.teams.push(...payload)
      // },
      
      filterOnlyCapsText (value, search) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleLowerCase().indexOf(search) !== -1
      },

      joinTeam (item) {
        this.dialogJoin = true
        this.editedIndex = this.teams.indexOf(item.teamname)
        this.editedItem = Object.assign({}, item.teamname)
        this.teamDatas = item
        // console.log(this.editedIndex)
        // console.log(this.editedItem)
      },

      close () {
        this.dialog = false
        this.dialogJoin = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        // this.teams.push(...payload)
        this.initialize()
        this.close()
      },

      // editItem (item) {
      //   this.editedIndex = this.teams.indexOf(item)
      //   this.editedItem = Object.assign({}, item)
      //   this.dialog = true
      // },

      // deleteItem (item) {
      //   this.editedIndex = this.teams.indexOf(item)
      //   this.editedItem = Object.assign({}, item)
      //   this.dialogDelete = true
      // },

      // deleteItemConfirm () {
      //   this.teams.splice(this.editedIndex, 1)
      //   this.closeDelete()
      // },

      // closeDelete () {
      //   this.dialogDelete = false
      //   this.$nextTick(() => {
      //     this.editedItem = Object.assign({}, this.defaultItem)
      //     this.editedIndex = -1
      //   })
      // },
    },
  }
</script>

<style lang="scss" scoped>
.arrow-icon {
  cursor: pointer;
  transition: .4s ease;
  
  &:hover {
    transform: translateX(5px);
  }
}
</style>