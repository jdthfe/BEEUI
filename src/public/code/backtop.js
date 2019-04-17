let code = {};

code.base = `
<template>
    <ga-back-top/>
</template>
<script>
    export default {

    }
</script>
`;

code.zdy = `
  <template>
    <ga-back-top 
      :height="100" 
      :bottom="200">
      <div class="zdytop">返回顶端</div>
    </ga-back-top>
  </template>
  <style scoped>
    .zdytop {
      padding: 10px;
      background: rgba(0, 153, 229, .7);
      color: #fff;
      text-align: center;
      border-radius: 2px;
    }

</style>
<script>

export default {

}

</script>
`;

export default code;
