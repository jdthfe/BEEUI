let code = {};

code.base=`
<template>
  <ga-row>
      <ga-col class="demo-spin-col">
        <ga-spin :fix='fix'>
        </ga-spin>
      </ga-col>
    </ga-row>
</template>
<style>
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
</style>
<script>
export default {
  data() {
    return {
      fix: true,
    }
  },
}
</script>
`;
code.zdy = `
<template>
    <ga-row>
      <ga-col class="demo-spin-col">
        <ga-spin :fix='fix'>
          <ga-icon type="load-c" size=22 class="demo-spin-icon-load"></ga-icon>
          <div class="loading-text">loading</div>
        </ga-spin>
      </ga-col>
    </ga-row>
</template>
<style>
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}

@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}

</style>
<script>
export default {
  data() {
    return {
      fix: true,
    }
  },
}
</script>

`;
export default code;
