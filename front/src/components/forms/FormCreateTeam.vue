<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <span v-if="teamExist" class="warning"> {{ teamExistMsg }} </span>
    <!-- Nom de l'équipe -->
    <v-text-field
      v-model="teamname"
      label="Nom de l'équipe"
      :rules="[v => !!v || 'Requis']"
      required
    ></v-text-field>

    <!-- Nbre de coleader -->
    <v-text-field
      v-model="coleaders"
      label="Nombre de coleaders"
      type="number"
      :rules="[v => !!v || 'Requis']"
      required
    ></v-text-field>

    <!-- Nombres de joueurs -->
    <v-text-field
      v-model="membres"
      label="Nombres de joueurs"
      type="number"
      :rules="[v => !!v || 'Requis']"
      required
    ></v-text-field>

    <!-- Classement -->
    <v-select
      v-model="division"
      :items="divisionItems"
      label="Classement de l'équipe :"
      :rules="[v => !!v || 'Classement requis']"
      required
    >
    </v-select>

    <!-- Role -->
    <!-- <v-select
      v-model="role"
      :items="roleItems"
      label="Tu es :"
      :rules="[v => !!v || 'Merci d\'indiquer ton rôle']"
      required
    >
    </v-select> -->

    <!-- Email -->
    <!-- <v-text-field
      v-model="email"
      label="E-mail"
      :rules="emailRules"
      required
    ></v-text-field> -->
      
    <!-- Code -->
    <v-text-field
      v-model="teamCode"
      label="Crée un code d'entrée à partager avec le leader / coleader (chiffres, lettres, specials etc sans espaces)"
      :rules="[v => !!v || 'Requis']"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      label="Je certifie est un membre gradé de mon équipe"
      :rules="[v => !!v || 'Ce champ est requis !']"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="warning"
      @click="close"
    >
      Annuler
    </v-btn>
  </v-form>
</template>

<script>
  import firebaseInit from '../Firebase/FirebaseInit.js'
  import { getFirestore } from "firebase/firestore"
  import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
  import { getDatabase, ref, update, onValue } from "firebase/database";

  export default {
    data: () => ({
      uuid: null,
      valid: true,
      teamExistMsg: "Ce nom d'équipe est déjà pris :/",
      teamExist: false,
      name: '',
      // email: '',
      // emailRules: [
      //   v => !!v || 'E-mail is required',
      //   v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      // ],
      select: null,
      checkbox: false,
      teamname: '',
      coleaders: '',
      membres: '',
      // role: null,
      // roleItems: ['leader', 'coleader'],
      division: null,
      divisionItems: ['CC', 'Division I', 'Division II', 'Division III', 'Division IV', 'Division V', 'Division VI', 'Division VII', ],
      teamCode: '',
    }),

    async created () {
      this.uuid = this.$store.getters.getUuid
    },
    
    methods: {
      async validate () {
        const teamValues = [
          {
            teamname: this.teamname,
            leaders: this.coleaders,
            membres: this.membres,
            division: this.division,
            teamCode: this.teamCode,
          }
        ]
        this.$refs.form.validate() // retour true ou false

        if (this.$refs.form.validate()) {
            // On verifie que l'équipe n'existe pas déjà puis on crée sinon on alert
            const dbFirestore = getFirestore(firebaseInit);
            const q = query(collection(dbFirestore, "teams"), where("teamname", "==", this.teamname))
            const querySnapshot = await getDocs(q);
            let docRef = null

            if (querySnapshot.docs.length === 0) {
              docRef = await addDoc(collection(dbFirestore, "teams"), ...teamValues)
            } else {
              querySnapshot.forEach((doc) => {
                this.teamExist = true
                console.log(doc.id, " => ", doc.data())
              })
            }
            
            
            // on update le userDatas
            const dbRealtime = getDatabase()
            const userDb = ref(dbRealtime, 'users/' + this.uuid)
            update(userDb, {
              teamname: teamValues[0].teamname, 
              teamCode: teamValues[0].teamCode, 
              teamId: docRef.id
            })
            let userNewValue = null
            onValue(userDb, (snapshot) => {
              const data = snapshot.val()
              console.log(data)
              userNewValue = data
            })
            // on close + push en store
            this.teamExist = false
            this.$store.dispatch('setUser', userNewValue)
            this.$emit('newteam', teamValues)
            this.$refs.form.reset()
        }
      },
      close () {
        this.$refs.form.reset()
        this.$emit('close')
      },
      // reset () {
      //   this.$refs.form.reset()
      // },
      // resetValidation () {
      //   this.$refs.form.resetValidation()
      // },
    },
  }
</script>

<style lang="scss" scoped>

</style>