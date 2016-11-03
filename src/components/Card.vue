<template>
  <div class="gif mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
      <img :src="gif.images.fixed_height.url" alt="" />
    </div>
    <div class="mdl-card__actions">
      <span class="filename">{{ gif.slug }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gif: Object
  }
}
</script>

<style scoped>
.gif {
  margin: 0 auto;
  width: 60%;
  justify-content: space-between;
  margin-bottom: 60px;
}

.gif.mdl-card {
  width: 256px;
  min-height: 256px;
}

.gif > .mdl-card__actions {
  min-height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
}

.filename {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}
</style>
