<template lang="html">
  <!--V-model: todo lo que se vaya escribiendo en el input se guarda en la propiedad data-->
  <input
    type="text"
    name="search"
    placeholder="Write an user!"
    class="search"
    v-model='criteria'
    v-on:keyup.enter='onSearch'
    v-focus
  />
</template>

<script>
import bus from '@/busdata.js'

export default {
  name: 'TodoSearch',
  data () {
    return {
      criteria: ''
    }
  },
  watch: {
    criteria () {
      // Emit sirve para lanzar un evento hacia arriba, el padre escucha
      // this.$emit('search', this.criteria)
      // Ahora vamos a usar el bus para que no solo llegue al padre:
      bus.$emit('search', this.criteria)
    }
  }
}

</script>
