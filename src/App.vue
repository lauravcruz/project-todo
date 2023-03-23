<!--Con lang le decimos a webpack que vamos a usar html-->
<!--Podemos meter la template desde un html aparte con src o dentro de las etiquetas template-->
<template lang = "html" src = '@/App.html'>
  <!-- <div id="todo-app" class = "todoApp">
    <div class="container">
      <div class="menu">
        <todo-search v-on:search = 'onSearch'></todo-search>
        <todo-bookmarks></todo-bookmarks>
      </div>
    </div>
    <main class="content">
      <header class="content__header"></header>
      <todo-logo></todo-logo>
      <todo-developers></todo-developers>
    </main>
  </div> -->
</template>

<script>

import TodoSearch from '@/components/TodoSearch'
import TodoLogo from '@/components/TodoLogo'
import TodoBookmarks from '@/components/TodoBookmarks'

export default {
  name: 'todo-app',
  data () {
    return {
      show: false
    }
  },
  methods: {
    onSearch (searchCriteria) {
      console.log('Search:', searchCriteria)
      this.show = true
    }
  },
  components: {
    TodoSearch,
    TodoLogo,
    TodoBookmarks,
    // vamos a cargar un componente de forma asíncrona. Le podemos dar un delay y qué hacer mientras carga o un error
    TodoDevelopers: () => ({
      component: import('@/components/TodoDevelopers'),
      delay: 400,
      timeout: 5000
      // loading: TodoLoading,
      // error: TodoErrorLoading
    })
  }
}
</script>

<!--Este bloque css va a ser global: usado por toda la app-->
<style>
@import 'assets/css/reset';
@import 'assets/css/global';

</style>
<!--este bloque lo encapsulamos al componente con scoped-->
<style lang='css' scoped src = './App.css'>

</style>
