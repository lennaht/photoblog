<template>
  <div id="app" class="uk-container">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    'Navbar': Navbar
  }
}
</script>

<style>

</style>
