<template>
  <figure class="asciinema-player" :id="id"></figure>
</template>

<script>
  // From https://gist.github.com/jukefr/39e6408cb667855f2bea702609c7a9c6
  export default {
    props: ['id'],
    data() {
      return {
        source: `https://asciinema.org/a/${this.id}.js`,
        ascid: `asciicast-${this.id}`,
      }
    },
    mounted() {
      // Can't use script tags directly apparently
      let asciiscript = document.createElement('script');
      asciiscript.setAttribute('src', this.source);
      asciiscript.setAttribute('id', this.ascid);
      document.getElementById(this.id).appendChild(asciiscript);
    }
  }
</script>

<style lang="scss" scoped>
.asciinema-player {
  margin: 2em 0;
}
</style>