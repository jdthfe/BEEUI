let code = {};

code.type = `
<template>
    <ga-button icon="ios-search">Default</ga-button>
    <ga-button type="primary">基础按钮</ga-button>
    <ga-button type="success">成功按钮</ga-button>
    <ga-button type="warning">警告按钮</ga-button>
    <ga-button type="error">错误按钮</ga-button>
    <ga-button disabled>Default</ga-button>
    <ga-button type="primary" disabled>基础按钮</ga-button>
</template>
<script>
    export default {

    }
</script>
`;

code.shape = `
<template>
    <ga-button shape="circle" icon="ios-search">Default</ga-button>
    <ga-button type="primary" shape="circle">基础按钮</ga-button>
    <ga-button type="success" shape="circle">成功按钮</ga-button>
    <ga-button type="warning" shape="circle">警告按钮</ga-button>
    <ga-button type="error" shape="circle">错误按钮</ga-button>
    <ga-button disabled shape="circle">Default</ga-button>
    <ga-button type="primary" disabled shape="circle">基础按钮</ga-button>
</template>
<script>
export default {

}
</script>
`;

code.size = `
<template>
    <ga-button type="primary" size="large">Large</ga-button>
    <ga-button type="primary">Default</ga-button>
    <ga-button type="primary" size="small">Small</ga-button>
    <br><br>
    <ga-button type="primary" shape="circle" size="large">Large</ga-button>
    <ga-button type="primary" shape="circle">Default</ga-button>
    <ga-button type="primary" shape="circle" size="small">Small</ga-button>
    <br><br>
    <ga-button type="success" long>确认提交</ga-button>
    <ga-button type="error" long>确认删除</ga-button>
</template>
<script>
export default {

}
</script>
`;

code.loading = `
<template>
    <ga-button type="primary" loading>Loading...</ga-button>
    <ga-button type="primary" :loading="loading" @on-click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </ga-button>
    <ga-button type="primary" :loading="loading2" icon="checkmark-round" @on-click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </ga-button>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            loading2: false
        }
    },
    methods: {
        toLoading () {
            this.loading = true;
        },
        toLoading2 () {
            this.loading2 = true;
        }
    }
}
</script>
`;

export default code;
