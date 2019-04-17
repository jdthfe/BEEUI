let code = {};

code.base = `
<template>
    <ga-steps :current="1">
      <ga-step title="已完成" content="这里是该步骤的描述信息"></ga-step>
      <ga-step title="进行中" content="这里是该步骤的描述信息"></ga-step>
      <ga-step title="待进行" content="这里是该步骤的描述信息"></ga-step>
      <ga-step title="待进行" content="这里是该步骤的描述信息"></ga-step>
    </ga-steps>
</template>
<script>
    export default {

    }
</script>
`;

code.simple = `
<template>
    <ga-steps :current="2" size="small">
      <ga-step title="已完成"></ga-step>
      <ga-step title="进行中"></ga-step>
      <ga-step title="待进行"></ga-step>
      <ga-step title="待进行"></ga-step>
    </ga-steps>
</template>
<script>
    export default {

    }
</script>
`;

code.icon = `
<template>
    <ga-steps :current="1">
      <ga-step title="注册" icon="person-add"></ga-step>
      <ga-step title="上传头像" icon="camera"></ga-step>
      <ga-step title="验证邮箱" icon="email"></ga-step>
    </ga-steps>
</template>
<script>
    export default {

    }
</script>
`;

code.next = `
<template>
    <p>当前正在进行第 {{ current + 1 }} 步</p>
    <ga-steps :current="current">
        <ga-step title="步骤1"></ga-step>
        <ga-step title="步骤2"></ga-step>
        <ga-step title="步骤3"></ga-step>
        <ga-step title="步骤4"></ga-step>
    </ga-steps>
    <Button type="primary" @click="next">Next step</Button>
</template>
<script>
    export default {
        data () {
            return {
                current: 0
            }
        },
        methods: {
            next () {
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            }
        }
    }
</script>
`;

code.error = `
<template>
    <ga-steps :current="1" status="error">
      <ga-step title="已完成" content="这里是该步骤的描述信息"></ga-step>
      <ga-step title="进行中" content="这里是该步骤的描述信息"></ga-step>
      <ga-step title="待进行" content="这里是该步骤的描述信息"></ga-step>
      <ga-step title="待进行" content="这里是该步骤的描述信息"></ga-step>
    </ga-steps>
</template>
<script>
    export default {

    }
</script>
`;

export default code;
