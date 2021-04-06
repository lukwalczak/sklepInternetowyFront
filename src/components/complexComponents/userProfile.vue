<template>
  <div class="wrapper">
    <div class="mainProfileBox">
      <div class="leftProfileBox">
        <p class="text">Cześć, <br><strong>{{email}}</strong></p>
        <div class="profileControls">
          <btn class="profileControl" @click.native="displaySettings">
            <settings class="svg settingsIcon"/><p class="text">Ustawienia Konta</p>
          </btn>
          <router-link to="/cart" class="profileControl"><small-cart class="svg cartIcon"/> <p class="text">Koszyk</p><div></div></router-link>
          <btn class="profileControl" @click.native="displayRegulations">
            <regulations class="svg regulationsIcon"/><p class="text">Regulamin</p>
          </btn>
          <btn class="profileControl" @click.native="logoutUser">
            <logout class="svg logoutIcon"/>
            <p class="text">Wyloguj</p>
          </btn>
        </div>
      </div>
      <div class="rightProfileBox">
        <div v-if="displayedInformation==='settings'" class="informationWrapper">
          <div class="settingsWrapper">
            <h1 class="text title">Ustawienia</h1>
            <div class="settingsOption defaultMargin">
              <p class="text">Twój aktualny email: {{email}}</p>
              <input v-if="changeEmail">
              <btn class="">Zmień email</btn>
            </div>
            <div class="settingsOption defaultMargin">
              <p class="text">Hasło</p>
            </div>
            <div class="settingsOption defaultMargin">
              <p class="text">Usuń konto</p>
            </div>
          </div>
        </div>
        <div v-if="displayedInformation==='regulations'" class="informationWrapper">
          <h1 class="text title">Regulamin</h1>
          <ul class="regulationsList">
            <li class="defaultMargin text">abcdefghijklmnoprstuwyxz</li>
            <li class="defaultMargin text">abcdefghijklmnoprstuwyxz</li>
            <li class="defaultMargin text">abcdefghijklmnoprstuwyxz</li>
            <li class="defaultMargin text">abcdefghijklmnoprstuwyxz</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
import Regulations from "@/components/simpleComponents/icons/rules";
import Settings from "@/components/simpleComponents/icons/settings";
import SmallCart from "@/components/simpleComponents/icons/smallCart";
import router from "@/router";
import Logout from "@/components/simpleComponents/icons/logout";

export default {
  name: "userProfile",
  components: {Logout, SmallCart, Settings, Regulations, Btn},
  data() {
    return {
      userId: '',
      email: '',
      roles: [],
      displayedInformation: 'settings',
      changeEmail: false,
    }
  },
  methods: {
    displaySettings(){
      this.displayedInformation = 'settings';
    },
    displayRegulations(){
      this.displayedInformation = 'regulations';
    },
    logoutUser() {
      this.$store.dispatch('LOGOUT')
          .then(router.push('/')
      )
    },
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
.text{
  font-family: 'Roboto', sans-serif;
  color: #f3f3c9;
  font-size: 18px;
}
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
}
.mainProfileBox{
  height: 600px;
  width: 800px;
  background-color: #3f3f3f;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.leftProfileBox{
  display: flex;
  flex-flow: column;
  width: 35%;
  height: 100%;
  box-sizing: border-box;
  padding: 32px;
}
.rightProfileBox{
  width: 65%;
  height: 100%;
  box-sizing: border-box;
  padding: 32px;
  border-left: #1f1f1f solid;
}
.profileControls{
  display: flex;
  flex-flow: column;
  align-content: flex-start;
  width: 100%;
  height: 100%;
}
.profileControl:last-child{
  margin-top: auto;
}
.profileControl{
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  border: none;
  text-decoration: none;
  background-color: #3f3f3f;
  padding: 10px;
  outline: none;
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
.svg{
  margin-right: 10px;
  height: 25px;
  width: 25px;
  color: #f3f3c9;
}
.informationWrapper{
  width: 100%;
  height: 100%;
}
.title{
  text-align: center;
  font-size: 32px;
}
.regulationsList{
  width: 100%;
}
.defaultMargin{
  margin: 20px 0 20px 0;
}
.profileControl::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1f1f1f;
  border-radius: 16px;
  z-index: -1;
  transition: transform 300ms ease-in-out;
  transform: scaleX(0);
  transform-origin: left;
}
.profileControl:hover::before{
  transform: scaleX(1);
}
</style>