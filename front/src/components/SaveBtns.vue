<template>
  <div class="save-btns-container">
    <v-btn>Importer</v-btn>
    <v-btn color="blue" class="save-btn">Sauvegarder</v-btn>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dates: [],
    }),
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
    methods: {
      emitDates () {
        let datesFormatted = null
        if (this.dates.length === 2) {
          const [year1, month1, day1] = this.dates[0].split('-')
          const [year2, month2, day2] = this.dates[1].split('-')
          datesFormatted = [`${day1}/${month1}/${year1}`, `${day2}/${month2}/${year2}`]
        }
        this.$emit('emit-dates', datesFormatted)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .save-btn {
    color: #fff;
  }
</style>
