<template>
  <div class="container">
    <h2>Members</h2>
    <br>
    <h3>Server response: </h3> <br>
    <pre>{{response}}</pre>

    <div class="m30 m has-text-centered">
      <a class="button is-small" @click="onGetMembers">Get Members</a>
    </div>

  </div>
</template>

<script>
import MemberService from 'services/MemberService'

export default {
  data() {
    return {
      response: ''
    }
  },
  methods: {
    onGetMembers() {
      MemberService.getAll().then(response => {
        console.log(response.data)
        this.response = response.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '../../main.scss'

</style>
