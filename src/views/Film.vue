<template>
  <section class="film">
    <h1 class="film-title text-md">{{ film.title }}</h1>
    <img class="w-full" :src="film.img" :alt="film.title" />
    <div class="film-subtitle my-2">
      <p>Немного о сюжете:</p>
      <p>{{ film.description }}</p>
    </div>
    <div class="film-subtitle my-2">
      <p>Рейтинг:</p>
      <p>{{ film.rating }}</p>
    </div>

    <div class="film-subtitle my-2">
      <p>Актёрский состав:</p>
      <p>{{ film.actors.join(', ') }}</p>
    </div>

    <div class="film-subtitle my-2">
      <p>Режиссеры:</p>
      <p>{{ film.directors.join(', ') }}</p>
    </div>
  </section>
</template>

<script>
import films from '@/store/db'

export default {
  name: 'Home',

  computed: {
    film() {
      return films.find(film => film.id == this.$route.params.id)
    }
  }
  // data() {
  //   return {
  //     film: null
  //   }
  // },

  // created() {
  //   const film = films.find(film => film.id == this.$route.params.id)
  //   if (film) {
  //     this.film = film
  //   }
  // }
}
</script>
