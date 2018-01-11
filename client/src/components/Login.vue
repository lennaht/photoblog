<template>
  <div>
    <h1>Login</h1>
    <input type="text" name="username" placeholder="Username" v-model="username" required>
    <input type="password" name="password" placeholder="Password" v-model="password" required>
    <button @click="loginUser">Login</button>
    <p v-html="error"></p>
  </div>
</template>

<script>
import Authentication from '@/services/Authentication'
export default {
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    loginUser: async function () {
      try {
        const res = await Authentication.login({
          username: this.username,
          password: this.password
        })
        console.log(res.data)
        this.$store.dispatch('setToken', res.data.token)
        this.$store.dispatch('setUser', {username: res.data.username, userId: res.data.userId})
      } catch (err) {
        this.error = err.response.data.error.message
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
