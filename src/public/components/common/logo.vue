<template>
  <a href="/gaui/dist/#/" class="site_title"> <i v-bind:class="logoIcon"></i>
    <span>{{systemName}}</span>
  </a>
</template>
<script>
export default {
  name: "logo",
  data() {
    return {
      systemName: "Bee-UI",
      logoIcon: ""
    }
  }
}
</script>
