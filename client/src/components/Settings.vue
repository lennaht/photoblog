<template>
  <div>

    <h1 class=".uk-text-lead">Settings</h1>

    <div class="margin-all">

      <input class="uk-input" type="text" name="username" placeholder="Username" required>
      <input class="uk-input" type="password" name="password" placeholder="Password" required>

      <button class="uk-button uk-button-primary" >Login</button>

      <!-- <p v-bind:class="{ 'uk-text-danger': hasError }" v-html="msg"></p> -->
      
    </div>
    
  </div>
</template>

<script>
import isValidToken from '@/services/isValidToken'
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    isValidToken()
  }
}
</script>

<style>

</style>
