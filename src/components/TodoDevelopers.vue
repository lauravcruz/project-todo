<template lang = "html">
  <ul class="developers">
    <li class="developers__item">
      <!-- <todo-developer></todo-developer> -->
    </li>
  </ul>
</template>

<script>
import bus from '@/busdata.js'
/* Este componente devuelve una lista de desarrolladores */
export default {
  name: 'TodoDevelopers',
  data () {
    return {
      users: []
    }
  },
  //  Cuando el componente esté montado se usa mounted()
  mounted () {
    console.log('TodoDeveloper mounted')
  },
  created () {
    // Igual que usamos v-on para escucha desde el componente, se lo aplicamos al bus
    bus.$on('search', criteria => {
      console.log('TodoDevelopers', criteria)
    })
  }
}

</script>
