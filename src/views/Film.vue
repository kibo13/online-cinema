<template>
  <section class="section">
    <h3 class="title text-md">{{ film.title }}</h3>

    <hr class="line" />

    <img class="w-full" :src="film.img" :alt="film.title" />

    <div class="my-2">
      <p class="film-subtitle">Немного о сюжете:</p>
      <p class="film-text">{{ film.description }}</p>
    </div>
    <div class="my-2">
      <p class="film-subtitle">Рейтинг:</p>
      <p class="film-text">{{ film.rating }}</p>
    </div>

    <div class="my-2">
      <p class="film-subtitle">Актёрский состав:</p>
      <p class="film-text">{{ film.actors.join(', ') }}</p>
    </div>

    <div class="my-2">
      <p class="film-subtitle">Режиссеры:</p>
      <p class="film-text">{{ film.directors.join(', ') }}</p>
    </div>

    <hr class="line" />

    <h3 class="title text-md">Смотрели данный фильм?</h3>

    <div class="my-2">
      <p class="film-subtitle">Оставьте отзыв:</p>
      <ul class="film-control">
        <li v-for="reaction in reactions" :key="reaction.id">
          <button class="film-btn">
            {{ reaction.title }}
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Film',

  computed: {
    ...mapState({
      reactions: state => state.reactions.data,
      films: state => state.films.data
    }),

    film() {
      return this.films.find(film => film.id == this.$route.params.id)
    }
  }
}
</script>
