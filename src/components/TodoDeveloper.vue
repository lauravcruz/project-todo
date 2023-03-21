<template lang = 'html'>
  <div class="developer">
  <img v-bind:src = 'avatar' class="developer__avatar">
  <div class="developer__info">
    <h2>
      <span class="developer__name">{{ name }}</span>
      <span class="developer__login">{{ login }}</span>
    </h2>
    <div class="developer__metadata">{{ metadata }}</div>
  </div>
  <div class="developer__stats">
    <div class="developer__stat">
      <div class="developer__icon"></div>
      <div class="developer__total">{{ repos }}</div>
    </div>
    <div class="developer__stat" v-show="gists">
      <div class="developer__icon"></div>
      <div class="developer__total">{{ gists }}</div>
    </div>
  </div>
</div>
</template>

<script>
/* Este componente es hijo de Developers. Le manda propiedades */
export default {
  name: 'TodoDeveloper',
  // DATA: atributos privados dentro de un componente
  // PROPS: atributos de un componente cuyo valor viene dado por el padre
  props: {
    avatar: {
      type: String,
      required: true,
      // validar que la propiedad sea un ruta
      validator (value) {
        return value.startsWith('http')
      }
    },
    name: {
      type: String,
      required: true
    },
    login: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: false // tb se puede no poner
    },
    repos: {
      type: Number
    },
    gists: {
      type: Number
    }
  },
  // Propiedades computadas: se usan cuando necesitamos calcular una propiedad interna del componente. Hacerle operaciones, concatenar o hacer algo con ellas antes de GET/SET
  computed: {
    metadata () {
      let meta = ''
      if (this.email) {
        meta = `${meta} ${this.email}`
      }
      if (this.location) {
        meta = `${meta} ${this.location}`
      }
      if (this.company) {
        meta = `${meta} ${this.company}`
      }
      return meta
    }
  },
  // watcher: observador sobre un atributo data/prop/computed. Cuando cambia una, reacciona
  watch: {
    // Cada vez que metadata cambie,imprime en consola el nuevo valor
    metadata (newValue) {
      console.log('Metadata:', newValue)
    }
  }
}

</script>
