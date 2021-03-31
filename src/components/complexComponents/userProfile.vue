<template>
  <div class="wrapper">
    <div class="box">
      <div class="information">
        <h3>witaj {{email}}</h3>
      </div>
      <div class="orders">
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userProfile",
  data() {
    return {
      userId: '',
      email: '',
      roles: [],
    }
  },
  methods: {

  },
  mounted() {
    this.$store.dispatch('GET_USERDATA').then( e => {
      this.userId = this.$store.getters.userId;
      this.email = this.$store.getters.userEmail;
      this.roles = this.$store.getters.userRoles;
    })
  }
}
</script>
<style scoped>
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
}
.box{
  height: 600px;
  width: 800px;
  background-color: #3f3f3f;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>