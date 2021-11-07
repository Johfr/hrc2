<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <!-- Nom de l'équipe -->
    <v-text-field
      v-model="equipes"
      label="Nom de l'équipe"
      :rules="[v => !!v || 'Requis']"
      required
    ></v-text-field>

    <!-- Nbre de coleader -->
    <v-text-field
      v-model="coleaders"
      label="Nombre de co-leaders"
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
    <v-select
      v-model="role"
      :items="roleItems"
      label="Tu es :"
      :rules="[v => !!v || 'Merci d\'indiquer ton rôle']"
      required
    >
    </v-select>

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
      label="Crée un code d'entrée à partager avec le leader / co-leader (chiffres, lettres, specials etc sans espaces)"
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
  export default {
    data: () => ({
      valid: true,
      name: '',
      // email: '',
      // emailRules: [
      //   v => !!v || 'E-mail is required',
      //   v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      // ],
      select: null,
      checkbox: false,
      equipes: '',
      coleaders: '',
      membres: '',
      role: null,
      roleItems: ['Leader', 'Co-leader'],
      division: null,
      divisionItems: ['CC', 'Division I', 'Division II', 'Division III', 'Division IV', 'Division V', 'Division VI', 'Division VII', ],
      teamCode: '',
    }),

    methods: {
      validate () {
        const teamValues = [
          {
            teamName: this.equipes,
            leaders: this.coleaders,
            membres: this.membres,
            division: this.division,
          },
        ]

        this.$refs.form.validate() // retour true ou false

        if (this.$refs.form.validate()) {
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