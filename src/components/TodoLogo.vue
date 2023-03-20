<template lang = "html">
    <h1 class = 'logo'>{{appName}}</h1>
</template>

<script>
export default{
  name: 'TodoLogo',
  data () {
    return {
      appName: 'Todo-app test'
    }
  }
}
</script>

<style lang = "css" scoped>
 .logo{
    background-color: green;
}
</style>
