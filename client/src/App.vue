<template>
  <div id="app">
    <navbar/>
      <div class="container is-fluid">
        <router-view/>
      </div>
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
  }
}
</script>

<style>

</style>
