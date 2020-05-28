<template>
  <section>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div v-if="loading === false" class="team">
      <div>
        <PlayerOne v-bind:PlayerOne="team.PlayerOne"/>
      </div>
      <div>
        <PlayerTwo v-bind:PlayerTwo="team.PlayerTwo"/>
      </div>
      <div>
        <PlayerThree v-bind:PlayerThree="team.PlayerThree"/>
      </div>
      <div>
        <PlayerFour v-bind:PlayerFour="team.PlayerFour"/>
      </div>
      <div>
        <PlayerFive v-bind:PlayerFive="team.PlayerFive"/>
      </div>
    </div>
    <div v-if="error">
      <h1>{{error}}</h1>
      <router-link to="/">Go Back</router-link>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";
import PlayerThree from "./PlayerThree";
import PlayerFour from "./PlayerFour";
import PlayerFive from "./PlayerFive";
export default {
  name: "Team",
  components: {
    PlayerOne,
    PlayerTwo,
    PlayerThree,
    PlayerFour,
    PlayerFive
  },
  data() {
    return {
      loading: false,
      error: null,
      team: {
        PlayerOne: null,
        PlayerTwo: null,
        PlayerThree: null,
        PlayerFour: null,
        PlayerFive: null
      },
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-no-image";
  },
async created() {
  const squad = [this.$route.params.full1, this.$route.params.full2, this.$route.params.full3, this.$route.params.full4, this.$route.params.full5];
  this.loading = true;
  try {
    const account1 = await axios.get(`/api/lookup/account/${squad[0]}/${this.$route.params.platform}`);
    this.team.PlayerOne = account1.data;
    const account2 = await axios.get(`/api/lookup/account/${squad[1]}/${this.$route.params.platform}`);
    this.team.PlayerTwo = account2.data;
    const account3 = await axios.get(`/api/lookup/account/${squad[2]}/${this.$route.params.platform}`);
    this.team.PlayerThree = account3.data;
    const account4 = await axios.get(`/api/lookup/account/${squad[3]}/${this.$route.params.platform}`);
    this.team.PlayerFour = account4.data;
    const account5 = await axios.get(`/api/lookup/account/${squad[4]}/${this.$route.params.platform}`);
    this.team.PlayerFive = account5.data;
    console.log(this.team);
    this.loading = false;
  } 
  catch (err) {
    this.loading = false;
    this.error = err
  }
  }
};
</script>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  max-width: 700px;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  border-radius: 20px;
}
h1.gamertag {
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.3rem 0.5rem;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}
a {
  display: inline-block;
  margin-top: 2rem;
  border: #fff 2px solid;
  padding: 0.5rem 0.8rem;
}
a:hover {
  border: #ccc 2px solid;
  color: #ccc;
}
.platform-avatar {
  width: 40px;
  margin-right: 0.7rem;
}
img {
  width: 100%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
li {
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
}
li p {
  font-size: 2rem;
}
li:first-child p {
  font-size: 1.5rem;
}
li span {
  font-size: 1rem;
  color: #ccc;
}
@media (max-width: 500px) {
  h1 {
    font-size: 1.5rem;
    display: block;
    text-align: center;
  }
  .platform-avatar {
    display: none;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  li p {
    font-size: 1.5rem;
  }
}
</style>