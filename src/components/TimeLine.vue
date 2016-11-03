<template>
  <main class="mdl-laoyut__content">
    <div class="page-content">
      <search @input="searchGIFs"></search>
      <card v-for="gif in gifs" :gif="gif" />
    </div>
  </main>
</template>

<script>
import Search from './Search'
import Card from './Card'

function getGIFs (query) {
  const params = encodeURIComponent(query).replace(/%20/g, '+')
  return fetch(`http://api.giphy.com/v1/gifs/search?q=${params}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
}

export default {
  components: {
    Card,
    Search
  },

  data () {
    return {
      gifs: []
    }
  },

  methods: {
    searchGIFs (keyword) {
      getGIFs(keyword).then(res => {
        this.gifs = res.data
      })
    }
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
