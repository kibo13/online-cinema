<template>
  <div id="app">
    <Header />
    <main class="main">
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Header from '@/components/Header'

export default {
  name: 'App',

  components: {
    Header
  },

  methods: {
    ...mapActions(['getFilms', 'getReactions'])
  },

  created() {
    this.getFilms(1000)
    this.getReactions(1000)
  }
}
</script>
