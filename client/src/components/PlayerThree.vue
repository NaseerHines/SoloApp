<template>
  <section>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div v-if="error">
      <h1>{{error}}</h1>
      <router-link to="/">Go Back</router-link>
    </div>
    <div v-if="PlayerThree" class="container">
      <h1 class="gamertag">
        <img :src="PlayerThree.avatar_url_146" alt class="platform-avatar" />
        {{PlayerThree.username}}
      </h1>
      <div class="grid">
        <div>
          <img :src="PlayerThree.avatar_url_146" alt />
        </div>
        <div>
          <ul>
            <li>
              <h4>Account Level</h4>
              <p>{{PlayerThree.progression.level}}</p>
              <h4>Playtime</h4>
              <p>{{Math.round(PlayerThree.stats.general.playtime / 60 / 60)}} hours</p>
              <h4>Platform</h4>
              <p>{{PlayerThree.platform}}</p>
              <h4>KD Ratio</h4>
              <p>{{PlayerThree.stats.general.kd}}</p>
              <h4>WL Ratio</h4>
              <p>{{PlayerThree.stats.general.wl}}</p>
            </li>
          </ul>
        </div>
      </div>
      <router-link to="/">Go Back</router-link>
    </div>
  </section>
</template>
<script>
export default {
  name: "Profile",
  props: ["PlayerThree"],
  data() {
    return {
      loading: false,
      error: null,
    };
  },
}
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