<template>
  <div class="footer">
    <div>{{copyRight}}</div>
    <div style="color:rgb(255, 51, 0)"></div>
  </div>
</template>
<style>
.footer {
  text-align: center;
  margin: 10px 0;
}
</style>
<script>
export default {
  name: "foot",
  data() {
    return {
      copyRight:
        "Copyright © 2015-2018 商业智能应用部-产品研发部 邮箱:so_team@jd.com 版权所有",
      flag: true
    }
  }
}
</script>


