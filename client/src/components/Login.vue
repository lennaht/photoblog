<template>
  <div>
    <h1 class=".uk-text-lead">Login</h1>
    <div class="margin-all">
      <input class="uk-input" type="text" name="username" placeholder="Username" v-model="username" required>
      <input class="uk-input" type="password" name="password" placeholder="Password" v-model="password" required>

      <button class="uk-button uk-button-primary" @click="loginUser">Login</button>

      <p v-bind:class="{ 'uk-text-danger': hasError }" v-html="error"></p>
    </div>
    
  </div>
</template>

<script>
import Authentication from '@/services/Authentication'
export default {
  data () {
    return {
      username: '',
      password: '',
      error: null,
      hasError: false
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
        this.hasError = true
        this.error = err.response.data.error.message
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margin-all > * {
  margin-top: 20px;
}
</style>
