<template>
  <div class="page-json-to-html">
    <div v-html="html">
      <!-- {{ html }} -->
    </div>
  </div>
</template>

<script>
import convert from './convert'
import { html } from 'js-beautify'

const root = {
  name: 'wapper',
  slot: 'default',
  type: 'component',
  props: {
    title: 'title'
  },
  children: [
    {
      name: 'block',
      slot: 'default',
      type: 'component',
      children: [
        {
          name: 'h3',
          type: 'tag',
          slot: 'default',
          props: {
            innerHTML: 'Title'
          }
        },
        {
          name: 'p',
          type: 'tag',
          slot: 'default',
          props: {
            innerHTML: 'A kitten or kitty is a juvenile domesticated cat. A feline litter usually consists of two to five kittens. To survive, kittens need the care of their mother for the first several weeks of their life. Kittens are highly social animals and spend most of their waking hours playing and interacting with available companions.'
          }
        }
      ]
    },
    {
      name: 'hr',
      slot: 'default',
      type: 'component'
    },
    {
      name: 'leftRightBlock',
      slot: 'default',
      type: 'component',
      children: [
        {
          name: 'h3',
          type: 'tag',
          slot: 'left',
          props: {
            innerHTML: 'left column'
          }
        },
        {
          name: 'p',
          type: 'tag',
          slot: 'left',
          props: {
            innerHTML: 'A kitten or kitty is a juvenile domesticated cat. A feline litter usually consists of two to five kittens. To survive, kittens need the care of their mother for the first several weeks of their life. Kittens are highly social animals and spend most of their waking hours playing and interacting with available companions.'
          }
        },
        {
          name: 'h3',
          type: 'tag',
          slot: 'right',
          props: {
            innerHTML: 'right column'
          }
        },
        {
          name: 'p',
          type: 'tag',
          slot: 'right',
          props: {
            innerHTML: 'A kitten or kitty is a juvenile domesticated cat. A feline litter usually consists of two to five kittens. To survive, kittens need the care of their mother for the first several weeks of their life. Kittens are highly social animals and spend most of their waking hours playing and interacting with available companions.'
          }
        }
      ]
    },
    {
      name: 'hr',
      slot: 'default',
      type: 'component'
    },
    {
      name: 'block',
      slot: 'default',
      type: 'component',
      children: [
        {
          name: 'button',
          slot: 'default',
          type: 'component',
          props: {
            content: 'Purchase Now',
            href: 'https://www.baidu.com',
            align: 'center'
          }
        }
      ]
    }
  ]
}

export default {
  data () {
    return {
      html: ''
    }
  },
  mounted () {
    this.html = html(convert(root))
  }
}
</script>
