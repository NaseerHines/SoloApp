<template>
  <section class="search">
    <h1>Compare your groups stats</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="platform">Team's Platform</label>
        <select name="platform" id="platform" v-model="platform">
          <option value="pc">Uplay</option>
          <option value="xbox">Xbox</option>
          <option value="psn">Playstation</option>
          <option value="select">Select a platform</option>
        </select>
      </div>
      <div class="form-group">
        <label for="squad"> Enter Squad Members</label>
        <input
          type="text"
          name="text"
          v-model="squad.squadLeader"
          id="squadLeader"
          placeholder="Squad Leader"
        />
        <input
          type="text"
          name="text"
          v-model="squad.squadMem2"
          id="squadMem2"
          placeholder="Squad Member 2"
        />
        <input
          type="text"
          name="text"
          v-model="squad.squadMem3"
          id="squadMem3"
          placeholder="Squad Member 3"
        />
        <input
          type="text"
          name="text"
          v-model="squad.squadMem4"
          id="squadMem4"
          placeholder="Squad Member 4"
        />
        <input
          type="text"
          name="text"
          v-model="squad.squadMem5"
          id="squadMem5"
          placeholder="Squad Member 5"
        />
      </div>
      <div class="form-group">
        <input type="submit" value="Submit" class="btn" />
      </div>
    </form>
  </section>
</template>
<script>
export default {
  name: "Squads",
  data() {
    return {
      platform: "select",
      squad: {
        squadLeader: "",
        squadMem2: "",
        squadMem3: "",
        squadMem4: "",
        squadMem5: ""
      }
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-image";
  },
  methods: {
    onSubmit() {
      const full = [];
      for (let mem in this.squad) {
        if (this.squad[mem] !== "") {
          full.push(this.squad[mem]);
        }
      }
      if (full.length < 5) {
        this.$toasted.show("Missing a players name", {
          duration: 3000,
          icon: "exclamation-circle"
        });
      } else {
        this.$router.push(`/Team/${this.platform}/${this.squad.squadLeader}/${this.squad.squadMem2}/${this.squad.squadMem3}/${this.squad.squadMem4}/${this.squad.squadMem5}`);
      }
    }
  }
};
</script>
<style>
</style>