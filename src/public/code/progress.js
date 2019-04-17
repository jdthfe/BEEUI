let code = {};

code.base = `
<template>
    <ga-progress percent='20%' :stroke-width="10" status="active"></ga-progress>
    <ga-progress percent="65%" status="wrong"></ga-progress>
    <ga-progress percent="25%" hide-info></ga-progress>
    <ga-progress percent="100%"></ga-progress>
    <ga-progress percent="25%" :stroke-width="5"></ga-progress>
    <ga-progress percent="100%">
      <ga-icon type="checkmark-circled"></ga-icon>
      <span>成功</span>
    </ga-progress>
</template>
<script>
    export default {

    }
</script>
`;

export default code;
