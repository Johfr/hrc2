<template>
  <div class="date-picker-container">
    <v-date-picker v-model="dates" range full-width @input="emitDates"></v-date-picker>
    <!-- <v-text-field
      v-model="dateRangeText"
      label="Date range"
      prepend-icon="mdi-calendar"
      readonly
    ></v-text-field>
    model: {{ dates }} -->
  </div>
</template>

<script>
  export default {
    // props: {
    //   updateDate: {
    //     type: Array,
    //     default: () => {}
    //   }
    // },
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
    },
  }
</script>
