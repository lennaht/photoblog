<template>
  <div>
    <h1>Register</h1>
    <input type="text" name="username" placeholder="Username" v-model="username">
    <input type="password" name="password" placeholder="Password" v-model="password">
    <input type="password" name="confirmPassword" placeholder="Confirm Password" v-model="confirmPassword">
    <button @click="registerUser">Register</button>
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
      confirmPassword: '',
      error: null
    }
  },
  methods: {
    registerUser: async function () {
      try {
        const res = await Authentication.register({
          username: this.username,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
        console.log(res.data)
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
