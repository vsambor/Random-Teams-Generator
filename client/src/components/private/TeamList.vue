<template>
    <div>
        <div class="tile" v-for="team in teams" :key="team._id">
            {{team.name}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      teams: ''
    }
  },
  created() {
    axios.get('http://localhost:8081/api/teams').then(response => {
      this.teams = response.data
    })
  }
}
</script>

<style scoped>

</style>
