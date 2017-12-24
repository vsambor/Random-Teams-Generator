<template>
  <div class="hello">
    <h2>Teams</h2>
    <br>
    <h3>Server response: </h3> <br>
    <pre>{{response}}</pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      response: ''
    }
  },
  created () {
    axios.get('http://localhost:8081/api/users').then((response) => {
      console.log(response.data)
      this.response = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
