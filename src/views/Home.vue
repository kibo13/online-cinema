<template>
  <section class="films">
    <h1 class="title text-md">Выбери фильм на свой вкус</h1>
    <ul class="film-list">
      <li class="film-card" v-for="film in films" :key="film.id">
        <img class="film-card__img" :src="film.img" :alt="film.title" />
        <p class="film-card__title">{{ film.title }}</p>
        <p class="film-card__rating">{{ film.rating }}</p>
        <router-link
          class="film-card__link"
          :to="{name: 'film', params: {id: film.id}}"
        >
          Подробнее о фильме
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import films from '@/store/db'

export default {
  name: 'Home',
  data() {
    return {
      films
    }
  }
}
</script>
