<template>
  <div class="mdl-textfield mdl-js-textfield">
    <input
      id="sample1"
      class="mdl-textfield__input"
      type="text"
      @change="onChange"
    >
    <i @click="onClick" class="material-icons">search</i>
  </div>
</template>

<script>
export default {
  methods: {
    onChange (event) {
      this.$emit('input', event.target.value)
    },
    onClick (event) {
      this.$emit('search')
    }
  }
}
</script>

<style scoped>
.mdl-textfield {
  padding: 0;
  background-color: #f6f6f6;
  margin: 30px auto;
  width: 60%;
  display: flex;
  margin-bottom: 60px;
}

i {
  cursor: pointer;
}
</style>
