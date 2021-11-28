<template>
  <div class="user-dashboard">
    <UserDashboard />
  </div>
</template>

<script>
import UserDashboard from '../components/User/UserDashboard.vue'
  export default {
    name: 'Dashboard',
    data () {
      return {}
    },
    computed: {
    },
    components: {
      UserDashboard,
    },
    watch: {
    },
    created () {
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
