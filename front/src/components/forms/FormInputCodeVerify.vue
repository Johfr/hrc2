<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <h2>
      {{ teamName }}
    </h2>
    <v-text-field label="Code d'entrée" :rules="[v => !!v || 'Requis']"></v-text-field>
    <v-btn
      color="success"
      @click="validateCode"
      class="mr-2"
    >
      Valider
    </v-btn>
    <v-btn
      color="warning"
      @click="cancel"
    >
      Annuler
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    props: {
      teamName: {
        type: String,
        default: () => {}
      }
    },
    data: () => ({
      valid: true,
    }),
    methods: {
      validateCode () {
        this.$refs.form.validate() // retour true ou false

        if (this.$refs.form.validate()) {
          this.$emit('close')
          this.$refs.form.reset()
        }
      },
      cancel () {
        this.$refs.form.reset()
        this.$emit('close')
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>