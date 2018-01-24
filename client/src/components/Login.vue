<template>
  <div>

    <h1 class=".uk-text-lead">Login</h1>

    <div class="margin-all">

      <input class="uk-input" type="text" name="username" placeholder="Username" v-model="username" required>
      <input class="uk-input" type="password" name="password" placeholder="Password" v-model="password" required>

      <button class="uk-button uk-button-primary" @click="loginUser">Login</button>

      <p v-bind:class="{ 'uk-text-danger': hasError }" v-html="msg"></p>

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
      msg: null,
      hasError: false
    }
  },
  props: ['message'],
  methods: {
    loginUser: async function () {
      try {
        const res = await Authentication.login({
          username: this.username,
          password: this.password
        })
        console.log(res.data)
        this.$store.dispatch('setToken', res.data.token)
        this.$store.dispatch('setUser', { username: res.data.username, userId: res.data.userId, email: res.data.email })
        this.$router.push({ name: 'Home' })
      } catch (err) {
        this.hasError = true
        this.msg = err.response.data.error.message
      }
    }
  },
  mounted: function () {
    this.msg = this.$route.query.message
    if (this.$route.query.from === 'register') this.hasError = false
    if (this.$route.query.from === 'unauthenticated') this.hasError = true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
