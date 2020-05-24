<template>
  <section>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div v-if="error">
      <h1>{{error}}</h1>
      <router-link to="/">Go Back</router-link>
    </div>
    <div v-if="team.squadmem1" class="container">
      <h1 class="gamertag">
        <img :src="team.squadmem1.avatar_url_146" alt class="platform-avatar" />
        {{team.squadmem1.username}}
      </h1>
      <div class="grid">
        <div>
          <img :src="team.squadmem1.avatar_url_146" alt />
        </div>
        <div>
          <ul>
            <li>
              <h4>Account Level</h4>
              <p>{{team.squadmem1.progression.level}}</p>
              <h4>Playtime</h4>
              <p>{{Math.round(team.squadmem1.stats.general.playtime / 60 / 60)}} hours</p>
              <h4>Platform</h4>
              <p>{{team.squadmem1.platform}}</p>
              <h4>KD Ratio</h4>
              <p>{{team.squadmem1.stats.general.kd}}</p>
              <h4>WL Ratio</h4>
              <p>{{team.squadmem1.stats.general.wl}}</p>
            </li>
          </ul>
        </div>
      </div>
      <router-link to="/">Go Back</router-link>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "Team",
  data() {
    return {
      loading: false,
      error: null,
      team: {
        squadmem1: null,
        squadMem2: null,
        squadMem3: null,
        squadMem4: null,
        squadMem5: null
      },
    };
  },
  beforeCreate() {
      console.log('hit');
      console.log(this.$route.params);
    document.body.className = "body-bg-no-image";
  },
async created() {
    const TOKEN = "9daeb7ab-8cf3-4ac2-af17-08843554590c";
    const squad = [this.$route.params.full1, this.$route.params.full2, this.$route.params.full3, this.$route.params.full4, this.$route.params.full5];
    console.log(squad);        
    this.loading = true;
    try {
      for (let user = 0; user < squad.length; user++) {
        for (let mem in this.team) {
            this.team[mem] = await axios.get(
            `https://api2.r6stats.com/public-api/stats/${squad[0]}/${this.$route.params.platform}/generic`, 
                {
                    headers: {
                        Authorization: `Bearer ${TOKEN}`,
                    }
                }
            )
            console.log(this.team[mem]);
            console.log(this.team.squadmem1);
        }
    }
    } catch (err) {
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