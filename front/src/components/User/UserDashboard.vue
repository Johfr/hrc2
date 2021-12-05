<template>
  <v-container class="team-list-container">
    <v-row class="">
      <div v-for="user in userDatas" :key="user.id">
        <h1 class="warning">WIP : Work In Progress</h1>
        <p class="warning">Toutes les fonctionnalités ne sont pas encore implémentées</p>
        <v-col cols="12">
          <h1>Bienvenue {{ user.nickname }}</h1>
        </v-col>
        <v-col cols="12">
          <p class="user-dashboard-info">
            <span>Ici tu vas pouvoir modifier dtes informations. </span>
            <span>Il te sera possible également de supprimer ton compte (action irréversible). </span>
            <span>Les modifications apportées à ton compte n'auront aucun impact sur les scores rentrés dans le tableau de la teamp page</span>
            <span>Seul le leader à la main sur le code d'entrée. N'hésite pas à le lui demander pour intégrer une team</span>
          </p>
        </v-col>
        <v-col cols="12">
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <v-card>
              <v-card-title>
                <span class="text-h5">Modifier les informations</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.nickname"
                        label="nickname"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.teamCode"
                        label="teamname"
                      ></v-text-field>
                    </v-col>
                    <!-- <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.teamId"
                        label="teamId"
                      ></v-text-field>
                    </v-col> -->
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.teamCode"
                        label="teamCode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-select
                        v-model="editedItem.role"
                        :items="roleItems"
                        label="role"
                        :rules="[v => !!v || 'Merci d\'indiquer ton rôle']"
                      >
                      </v-select> 
                      <!-- <v-text-field
                        v-model="editedItem.role"
                        label="role"
                      ></v-text-field> -->
                    </v-col>
                    <!-- <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.email"
                        label="email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.password"
                        label="password"
                      ></v-text-field>
                    </v-col> -->
                  </v-row>
                </v-container>
              </v-card-text>

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
          <div class="user-info-list-container">
            <!-- <v-btn
              color="primary"
              dark
              class="mb-2"
              v-if="userDatas[0].nickname != undefined"
              @click="editItem(user)"
            >
              Modifier les infos
            </v-btn> -->
            <!-- EMAIL  -->
            <div class="user-info-container">
              <span class="user-label">
                Email :
              </span>
              <span class="user-info">
                {{ user.email }}
              </span>
            </div>

            <!-- Nickname  -->
            <div class="user-info-container">
              <span class="user-label">
                Pseudo :
              </span>
              <span class="user-info">
                {{ user.nickname }}
              </span>
            </div>
            
            <!-- Nom de l'équipe -->
            <div class="user-info-container">
              <span class="user-label">
                Nom de l'équipe :
              </span>
              <span class="user-info">
                {{ user.teamname }}
              </span>
            </div> 
            
            <!-- role  -->
            <div class="user-info-container">
              <span class="user-label">
                role :
              </span>
              <span class="user-info">
                {{ user.role }}
              </span>
            </div>
            
            <!-- teamId  -->
            <div class="user-info-container">
              <span class="user-label">
                teamId :
              </span>
              <span class="user-info">
                {{ user.teamId }}
              </span>
            </div>
            
            <!-- teamCode  -->
            <div class="user-info-container" v-if="user.role === 'leader'">
              <span class="user-label">
                teamCode :
              </span>
              <span class="user-info">
                {{ user.teamCode }}
              </span>
            </div>
          </div>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script>
// import GetUser from '../Requests/GetUser.js'
// import GetTeamMate from '../Requests/GetTeamMate.js'

export default {
components: {},
  name: 'TeamLists',
  data: () => ({
    valid: true,
    dialog: false,
    user: null,
    nickname: '',
    teamname: '',
    teamCode: '',
    teamId: '',
    role: '',
    roleItems: ['leader', 'coleader', 'membre'],
    email: '',
    password: '',
    editedIndex: -1,
    editedItem: {
      nickname: '',
      teamname: '',
      teamCode: '',
      teamId: '',
      role: '',
      email: '',
      password: '',
    },
    defaultItem: {
      nickname: '',
      teamname: '',
      teamCode: '',
      teamId: '',
      role: '',
      email: '',
      password: '',
    },
  }),
  computed: {
    uuid () {
      return this.$store.getters.getUuid
    },
    userDatas () {
      return [this.$store.getters.getUser]
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  async created () {
    // const user = new Promise((resolve) => {
    //   if (this.userDatas !== null) {
    //     console.log('ok')
    //     resolve()
    //   } else {
    //     console.log('pasok')
    //   }
    // })
    // await user.then(() => {
    //   const teamId = this.userDatas[0].teamId
    //   const leaderEmail = this.userDatas[0].email
    //   const mates = GetTeamMate.teamMate(teamId, leaderEmail)
    //   console.log(teamId)
    //   console.log(mates)
    // })
  },
  mounted () {
  },
  methods: {
    validateCode () {
    },
    cancel () {
    },

    editItem (item) {
      this.editedIndex = this.userDatas.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
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
        Object.assign(this.userDatas[this.editedIndex], this.editedItem)
      } else {
        this.userDatas.push(this.editedItem)
      }
      this.close()
    },
  }
}
</script>

<style lang="scss" scoped>
.user-dashboard-info {
  display: flex;
  flex-direction: column;
}
</style>