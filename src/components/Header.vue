<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <router-link class="nav-logo" :to="{name: 'home'}">
          <img class="w-10" src="@/assets/logo.svg" alt="logo" />
          Кинотеатр
        </router-link>

        <button class="nav-sign" @click="changeUserState">
          {{ auth ? 'Выйти' : 'Войти' }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      auth: false
    }
  },

  created() {
    this.auth = localStorage.getItem('auth') !== null
  },

  methods: {
    changeUserState() {
      if (this.auth) {
        localStorage.removeItem('auth')
        this.auth = false
        this.$router.push({name: 'home'})
      } else {
        localStorage.setItem('auth', true)
        this.auth = true
      }
    }
  }
}
</script>
