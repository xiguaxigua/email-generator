<template>
  <div class="page-json-to-html">
    <pre>
      {{ html }}
    </pre>
  </div>
</template>

<script>
import convert from './convert'

const root = {
  content: '123'
}

export default {
  data () {
    return {
      html: ''
    }
  },
  mounted () {
    this.html = convert(root)
  }
}
</script>
