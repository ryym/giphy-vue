<template>
  <main class="mdl-laoyut__content">
    <div class="page-content">
      <search
        @input="CHANGE_KEYWORD"
        @search="SEARCH"
      />
      <card v-for="gif in gifs" :gif="gif" />
    </div>
  </main>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'
import Search from './Search'
import Card from './Card'
import {
  CHANGE_KEYWORD,
  SEARCH
} from '../vuex/action-types'

export default {
  components: {
    Card,
    Search
  },

  computed: {
    ...mapState([
      'gifs'
    ])
  },

  methods: {
    ...mapActions([
      CHANGE_KEYWORD,
      SEARCH
    ])
  }
}
</script>

<style scoped>
main {
  background-color: #f6f6f6;
  width: 100%;
  margin: 0 auto;
}

.page-content {
  display: flex;
  flex-direction: column;
}
</style>
