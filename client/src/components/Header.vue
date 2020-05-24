<template>
  <header class="header">
    <h1>Siege Stat Tracker</h1>
    <img :src="image" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Squads">Squad Search</router-link> |
      <router-link to="/Frequently">Frequently Searched</router-link>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      image: require("@/assets/header.png")
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