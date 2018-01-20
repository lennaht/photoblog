<template>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <a href="" class="uk-navbar-item uk-logo">photoblog</a>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li><router-link to="/login" active-class="uk-active" exact-active-class="uk-active">Login</router-link></li>
          <li><router-link to="/register" active-class="uk-active" exact-active-class="uk-active">Register</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.uk-navbar-container {
  background-color: red;
}
</style>