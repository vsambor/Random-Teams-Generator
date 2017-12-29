<template>
  <div id="app">
    <navbar/>
    <div class="container is-fluid">
      <router-view/>
    </div>
    <a class="button is-danger" @click="test">Test modal</a>
    <footerbar/>
  </div>
</template>

<script>
import Navbar from './components/core/Navbar'
import Footerbar from './components/core/Footer'

export default {
  name: 'app',
  components: {
    Footerbar,
    Navbar
  },
  methods: {
    test() {
      this.$alert('This is a message', 'Title')
    }
  }
}
</script>

<style lang="scss">
// Import Bulma's core
@import '~bulma/sass/utilities/_all';

// Import Bulma and Buefy styles
@import '~bulma';

body:not(.modal-open){
  padding-right: 0px !important;
}
</style>
