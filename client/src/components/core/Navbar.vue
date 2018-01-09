<template>
  <nav id="navbar" class="navbar is-dark">
    <div class="navbar-brand">

      <!-- The brand name -->
      <router-link class="navbar-item" to="/">Random Teams Generator</router-link>

      <!-- Little menu which appears once the application is running on a smaller device -->
      <div class="navbar-burger burger" data-target="navbar-rtg" @click="isSmallDevice=!isSmallDevice" :class="{ 'is-active' : isSmallDevice }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="avbar-rtg" class="navbar-menu" :class="{ 'is-active' : isSmallDevice }">

      <!-- The buttons on the left side -->
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="members" v-if="$store.getters.isLogged">Members</router-link>
        <router-link class="navbar-item" to="teams" v-if="$store.getters.isLogged">Teams</router-link>
      </div>

      <!-- The buttons on the right side -->
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">

            <!-- Login button -->
            <p class="control">
              <router-link to="Login">
                <a class="button is-small">Login</a>
              </router-link>
            </p>

            <!-- Register button -->
            <p class="control">
              <router-link to="Register">
                <a class="button is-small is-info">Register</a>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  data() {
    return {
      isSmallDevice: false
    }
  },
  mounted() {
    // To simulate the login.
    this.$store.commit('setCurrentUser', { name: 'tziuka' })
    // this.$store.commit('logout')
  }
}
</script>
