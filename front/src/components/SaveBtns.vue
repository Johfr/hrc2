<template>
  <div class="save-btns-container">
    <p class="success" v-show="dataSend">
      {{ dataSendMsg }}
    </p>
    <p class="success" v-show="dataPullSuccess">
      {{ dataPullSuccessMsg }}
    </p>
    <p class="error" v-show="alertFailed">
      {{ alertFailedMsg }}
    </p>

    <!-- <v-btn @click="dataPullConfirm = true">Importer</v-btn>
      @click="pushDatas"
      @click="loader = 'loading'"
     -->
    <v-btn
      :loading="loading"
      :disabled="loading"
      color="secondary"
      class="save-btn"
      @click="pushDatas"
    >
        Sauvegarder
      </v-btn>
    
    <p class="info" v-show="dataPullConfirm">
      {{ dataPullConfirmMsg }}
      <v-btn @click="dataPullConfirm = false">Annuler</v-btn>
      <v-btn color="blue" class="save-btn" @click="pullDatas">Continuer</v-btn>
    </p>
  </div>
</template>

<script>
  import firebaseInit from './Firebase/FirebaseInit.js'
  import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore"
  
  export default {
    data: () => ({
      loader: null,
      loading: false,
      teamId: '',
      dataPullConfirmMsg: 'Toutes les données non sauvegardées seront perdues',
      dataPullConfirm: false,
      dataPullSuccess: false,
      dataPullSuccessMsg: 'Les données ont bien été récupérées',
      dataSend: false,
      dataSendMsg: 'Les données ont bien été sauvegardées !',
      alertFailed: false,
      alertFailedMsg: "Une erreur s'est produite. Rechargez la page ou contactez un admin",
      nodataFound: true,
      nodataFoundMsg: "Aucune données trouvées. Créez-en et sauvegarder les d'abord",
    }),
    computed: {
      players () {
        return this.$store.getters.getPlayers
      }
    },
    created () {
      this.teamId = window.location.pathname.split('/')[2]
    },
    // watch: {
    //   loader () {
    //     const l = this.loader
    //     this[l] = !this[l]

    //     // setTimeout(() => (this[l] = false), 3000)

    //     // this.loader = null
    //   },
    // },
    methods: {
      async pushDatas () {
        // init loader
        this.loader = 'loading'
        const l = this.loader
        this[l] = !this[l]
        try {
          const events = this.$store.getters.getEvents
          const actifPlayers = this.$store.getters.getActifPlayers.length
          const leaders = this.$store.getters.getLeaders.length

          const db = getFirestore(firebaseInit)
          const teamRef = doc(db, "teams", this.teamId)

          // console.log(this.$store.getters.getPlayers)
          // console.log(events)
          await updateDoc(teamRef, {
            players: this.players,
            events: events,
            actifPlayers: actifPlayers,
            leaders: leaders
          }).then(() => {
            this.dataSend = true
            this[l] = false // on clean le loader
            setTimeout(() => {
              this.dataSend = false
              console.log('data pushé')
            }, 4000)
            this.loader = null
          })
          .catch((e) => {
            console.log('err', e)
          })
        } catch (e) {
          console.log('catched', e)
          this.alertFailed = true
          this.dataPullConfirm = false
          this.dataPullSuccess = false
        }
      },
      async pullDatas () {
        try {
          const db = getFirestore(firebaseInit)
          const teamRef = doc(db, "teams", this.teamId)
          const docSnap = await getDoc(teamRef)

          if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data())
            const playersStored = docSnap.data().players

            this.$store.dispatch('setPlayers', playersStored)

            // docSnap.data().players.map((doc) => {
            this.dataPullSuccess = true
              setTimeout(() => {
                this.dataPullSuccess = false
                this.dataPullConfirm = false
                // console.log('data pullé')
                // console.log(doc.nickname)
              }, 4000)
            // })
          } else {
            // doc.data() will be undefined in this case
            this.nodataFound = true
            console.log("No such document!");
          }
        } catch (e) {
          console.log('catched', e)
          this.alertFailed = true
          this.dataPullConfirm = false
          this.dataPullSuccess = false
          // console.log('this.alertFailed', this.alertFailed)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .save-btn {
    color: #fff;
  }
</style>
