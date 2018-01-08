<template>
  <div>
    <h1>Register</h1>
    <input type="text" name="username" placeholder="Username" v-model="username">
    <input type="password" name="password" placeholder="Password" v-model="password">
    <button @click="registerUser">Register</button>
  </div>
</template>

<script>
import Authentication from '@/services/Authentication'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    registerUser: async function () {
      const res = await Authentication.register({
        username: this.username,
        password: this.password
      })
      console.log(res.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
