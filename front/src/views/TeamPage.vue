<template>
<v-container>
  <v-row>
    <h1 class="col-6">team page</h1>
  </v-row>
  
  <v-row>
    <v-col cols="12">
      <TableMembers />
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import TableMembers from '../components/TableMembers.vue'
// import HelloWorld from '../components/HelloWorld'
// import TeamLists from '../components/TeamLists.vue'

  export default {
    name: 'Home',

    components: {
        TableMembers
      // HelloWorld
      // TeamLists,
    },
  }
</script>
