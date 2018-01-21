<template>
  <div>
    <h1>Register</h1>
    <div class="margin-all">
      <input class="uk-input" type="text" name="username" placeholder="Username" v-model="username" required>

      <input class="uk-input" type="email" name="email" placeholder="E-Mail" v-model="email" required>

      <input class="uk-input" type="password" name="password" placeholder="Password" v-model="password" required>
      <input class="uk-input" type="password" name="confirmPassword" placeholder="Confirm Password" v-model="confirmPassword">
    
      <button class="uk-button uk-button-primary" @click="registerUser">Register</button>
    
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
      confirmPassword: '',
      email: '',
      msg: null,
      hasError: false
    }
  },
  methods: {
    registerUser: async function () {
      try {
        const res = await Authentication.register({
          username: this.username,
          password: this.password,
          email: this.email,
          confirmPassword: this.confirmPassword
        })
        console.log(res.data)
        this.$router.push({ name: 'Login', params: { message: 'Your account was registered successfully, you can now log in.' } })
      } catch (err) {
        this.hasError = true
        this.msg = err.response.data.error.message
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
