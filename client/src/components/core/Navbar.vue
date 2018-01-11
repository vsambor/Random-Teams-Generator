<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

      <router-link to="/">
        <el-menu-item index="0">
          <strong>Random Teams Generator</strong>
        </el-menu-item>
      </router-link>

      <router-link to="/">
        <el-menu-item index="1">Home</el-menu-item>
      </router-link>

      <router-link to="teams" v-if="$store.getters.isLogged">
        <el-menu-item index="2">Teams</el-menu-item>
      </router-link>

      <router-link to="members" v-if="$store.getters.isLogged">
        <el-menu-item index="3">Members</el-menu-item>
      </router-link>

    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  mounted() {
    // To simulate the login.
    this.$store.commit('setCurrentUser', { name: 'tziuka' })
    // this.$store.commit('logout')
  },
  methods: {
    handleSelect(key, keyPath) {
      // Not working for some reason, I will recheck.
      if (key === '0') {
        this.activeIndex = '1'
        console.log(this.activeIndex)
      }
    }
  }
}
</script>
