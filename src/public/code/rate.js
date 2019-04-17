let code = {};

code.base = `
<template>
    <ga-rate v-model="value"></ga-rate>
</template>
<script>
export default {
  data() {
    return {
      value: 0
    }
  }
}

</script>
`;

code.half = `
<template>
    <ga-rate allow-half v-model="value"></ga-rate>
</template>
<script>
export default {
  data() {
    return {
      value: 2.5
    }
  }
}

</script>
`;


export default code;
