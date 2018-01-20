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
::-webkit-scrollbar {
  width: 10px;
  background-color: #dbdbdb;
}

::-webkit-scrollbar-thumb {
  background-color: #757575;
  border-radius: 5px;
}
</style>
