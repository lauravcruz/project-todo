<template lang = "html">
  <ul class="developers">
    <!--Directiva v-for permite iterar-->
    <li v-for='user in users' class="developers__item" v-bind:style="userConNombre"> <!--Solo se aplica esa clase cuando user.name esté relleno-->
      <todo-developer v-bind:avatar='user.avatar_url' v-bind:name='user.name' v-bind:login='user.login'
        v-bind:email='user.email' v-bind:location='user.location' v-bind:gists='user.gists' v-bind:repos="user.public_repos" v-bind:company="user.company"></todo-developer>
    </li>
  </ul>
</template>

<script>
import mocks from '@/mocks/users.js'
import bus from '@/busdata.js'

import TodoDeveloper from '@/components/TodoDeveloper'
/* Este componente devuelve una lista de desarrolladores */
export default {
  name: 'TodoDevelopers',
  components: {
    TodoDeveloper
  },
  data () {
    return {
      users: mocks,
      // user: {
      //   avatar: 'https://avatars.githubusercontent.com/u/99400646?s=400&u=af2f4cf7c753fd93561108af90fae93f81b1f58e&v=4',
      //   name: 'Lauravcruz',
      //   login: 'lauravcruz',
      //   email: 'lauravcruzdaw@gmail.com',
      //   location: 'Sevilla, España',
      //   repos: 200,
      //   gists: 15
      // },
      userConNombre: {
        fontWeight: 900
      }
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

<style lang='css' scoped>
@import '../assets/css/colors.css';
@import '../assets/css/mixins.css';

.developers {
  display: flex;
  overflow-x: none;
  overflow-y: auto;
}

.developers .developers__item::after {
  bottom: 0;
  left: 5%;
  width: 90%;
  height: 1px;
  background-color: var(--color-light-grey);
}

.developers{
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
}
</style>
