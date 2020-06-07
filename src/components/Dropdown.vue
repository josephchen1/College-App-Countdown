<template>
  <div>
    <a href="#">
      {{ status }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: ['status', 'statuses']
}
</script>

<style lang="scss">
</style>
