<template>
  <div class="text-center">
    <div class="notification-container">
      <p>#{{ player.id }} : {{ player.nickname }} {{ player.kicked === true ? 'a été banni' : 'a rejoint l\'équipe' }} !</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      player: {
        type: Object,
        default: () => {}
      }
    },
  }
</script>

<style lang="scss" scoped>
.notification-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 7px;
  background-color: #ecc73e;
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 1px 1px 10px #999;

  p {
    margin: 0;
  }
}
</style>