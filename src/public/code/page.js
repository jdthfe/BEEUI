let code = {};

code.base = `
<template>
    <ga-page :total="100" show-sizer show-elevator show-total placement="bottom"></ga-page>
    <ga-page :total="100" show-sizer show-elevator show-total size="small"></ga-page>
    <ga-page :current="2" :total="50" simple></ga-page>
</template>
<script>
    export default {

    }
</script>
`;

export default code;
