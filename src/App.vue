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
import Header from '@/components/Header'

export default {
  name: 'App',

  components: {
    Header
  }
}
</script>
