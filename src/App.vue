<template>
  <div id="app">
    <navbar-partial></navbar-partial>
    <router-view></router-view>
    <menutab-partial></menutab-partial>
  </div>
</template>

<script>
import NavbarPartial from '@/components/partials/NavbarPartial'
import MenutabPartial from '@/components/partials/MenutabPartial'

export default {
  name: 'app',
  components: {
    'navbar-partial': NavbarPartial,
    'menutab-partial': MenutabPartial
  }
}
</script>

<style>
body {
  margin: 10px 0px;
  font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
}
</style>
