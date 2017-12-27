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
      </div>

      <!-- The buttons on the right side -->
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">

            <!-- Login button -->
            <p class="control">
              <router-link class="button is-small" to="Login">Login</router-link>
            </p>

            <!-- Register button -->
            <p class="control">
              <router-link class="button is-small is-info" to="Register">Register</router-link>
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
  }
}
</script>
