<template lang = "html">
    <h1 class = 'logo'>{{appName | upper | capitalize }}</h1> <!--Aplicamos el filtro-->
</template>

<script>
export default{
  name: 'TodoLogo',
  data () {
    return {
      appName: 'Todo-app'
    }
  },
  // Podemos crear filtros para usos concretos. Ej: pasar a mayúscula. Lo llamamos en el template, mirar línea 2
  filters: {
    upper (value) {
      if (!value) {
        return ''
      }
      return value.toUpperCase()
    },
    capitalize (value) {
      if (!value) {
        return ''
      }
      return value.charAt(0) + value.slice(1).toLowerCase()
    }
  }
}
</script>

<style lang = "css" scoped>
 .logo{
    background-color: green;
}
</style>
