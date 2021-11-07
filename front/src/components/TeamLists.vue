<template>
  <v-container class="team-list-container">
    <v-row class="text-center">
      <h1>Liste des teams</h1>
      <TableSearch />
    </v-row>
  </v-container>
</template>

<script>
import TableSearch from './Tables/TableSearch.vue'

export default {
components: { TableSearch },
  name: 'TeamLists',
  data: () => ({
  }),
}
</script>

<style lang="scss" scoped>
</style>