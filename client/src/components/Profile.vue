<template>
  <section>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div v-if="error">
      <h1>{{error}}</h1>
      <router-link to="/">Go Back</router-link>
    </div>
    <div v-if="profileData" class="container">
      <h1 class="gamertag">
        <img :src="profileData.avatar_url_146" alt class="platform-avatar" />
        {{profileData.username}}
      </h1>
      <div class="grid">
        <div>
          <img :src="profileData.avatar_url_146" alt />
        </div>
        <div>
          <ul>
            <li>
              <h4>Account Level</h4>
              <p>{{profileData.progression.level}}</p>
              <h4>Playtime</h4>
              <p>{{Math.round(profileData.stats.general.playtime / 60 / 60)}} hours</p>
              <h4>Platform</h4>
              <p>{{profileData.platform}}</p>
              <h4>KD Ratio</h4>
              <p>{{profileData.stats.general.kd}}</p>
              <h4>WL Ratio</h4>
              <p>{{profileData.stats.general.wl}}</p>
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
  name: "Profile",
  data() {
    return {
      loading: false,
      error: null,
      profileData: null
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-no-image";
  },
  async created() {
    const TOKEN = "9daeb7ab-8cf3-4ac2-af17-08843554590c";
    this.loading = true;
    try {
      const account = await axios.get(
        `https://api2.r6stats.com/public-api/stats/${this.$route.params.gamertag}/${this.$route.params.platform}/generic`, 
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          }
        }
      );
      this.profileData = account.data;
      console.log(this.profileData);
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.error = err.response.data.message;
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