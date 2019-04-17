let code = {};

code.base = `
<template>
    <ga-badge count="3">
      <a href="#" class="demo-badge"></a>
    </ga-badge>
</template>
<style>
.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}

</style>
<script>
    export default {

    }
</script>
`;

code.dot = `
<template>
    <ga-badge dot>
        <a href="#" class="demo-badge"></a>
    </ga-badge>
    <ga-badge dot>
        <ga-icon type="ios-bell-outline" size="26"></ga-icon>
    </ga-badge>
    <ga-badge dot>
        <a href="#">可以是一个链接</a>
    </ga-badge>
</template>
<style>
.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}

</style>
<script>
    export default {

    }
</script>
`;

code.large = `
<template>
    <ga-badge count="100">
        <a href="#" class="demo-badge"></a>
    </ga-badge>
    <ga-badge count="1000" overflow-count="999">
        <a href="#" class="demo-badge"></a>
    </ga-badge>
</template>
<style>
.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}

</style>
<script>
    export default {

    }
</script>
`;

code.alone = `
<template>
    <ga-badge count="10"></ga-badge>
    <ga-badge count="20" class-name="demo-badge-alone"></ga-badge>
</template>
<style>
.demo-badge-alone {
  background: #5cb85c !important;
}
</style>
<script>
    export default {

    }
</script>
`;

export default code;
