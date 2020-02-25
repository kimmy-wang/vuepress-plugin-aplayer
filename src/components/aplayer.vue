<template>
  <div ref="aplayer"></div>
</template>

<script>
import APlayer from 'aplayer'
export default {
  name: 'APlayer',
  props: {
    options: Object,
  },
  data() {
    return {}
  },
  mounted() {
    let root = this.$refs.aplayer
    this.ap = new APlayer({
      container: root,
      ...this.options,
    })
  },
  beforeDestroy() {
    this.ap && this.ap.pause()
  },
  methods: {},
}
</script>

<style scoped>
@import '~aplayer/dist/APlayer.min.css';
</style>
