<template>
  <header class="header">
    <h1>Siege Stat Tracker</h1>
    <img :src="image" />
    <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin>
    <GoogleLogin :params="params" :logoutButton=true>Logout</GoogleLogin>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Squads">Squad Search</router-link> |
      <router-link to="/SavedList">Saved Searches</router-link>
    </div>
  </header>
</template>
<script>
import GoogleLogin from 'vue-google-login';
export default {
  name: "Header",
  components: {
    GoogleLogin,
  },
  methods: {
    onSuccess(googleUser) {
      console.log(googleUser);
      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
    }
  },
  data() {
    return {
      image: require("@/assets/header.png"),
      params: {
        client_id: "106365222964130383671"
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    };
  }
};
</script>
<style scoped>
div#nav{
  text-align: center;
  color: black;
  justify-content: center;
  align-items: center;
  max-width: 720px;
  margin: 0 auto;
  list-style: none;
}
img {
  width: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
h1 {
  text-align: center;
}
@media (max-width: 700px) {
  img {
    display: block;
    margin: auto;
  }
}
</style>