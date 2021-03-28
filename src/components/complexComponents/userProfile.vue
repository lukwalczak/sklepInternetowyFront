<template>
  <div class="wrapper">
    <div class="header">
      <h3>witaj {{email}}</h3>
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
  width: 100vw;
  height: 80vh;
}
.header{

}
</style>