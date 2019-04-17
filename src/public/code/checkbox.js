let code = {};

code.base = `
<template>
  <ga-checkbox-group v-model="social">
      <ga-checkbox label="twitter">
          <ga-icon type="social-twitter"></ga-icon>
          <span>Twitter</span>
      </ga-checkbox>
      <ga-checkbox label="facebook">
          <ga-icon type="social-facebook"></ga-icon>
          <span>Facebook</span>
      </ga-checkbox>
      <ga-checkbox label="github">
          <ga-icon type="social-github"></ga-icon>
          <span>Github</span>
      </ga-checkbox>
      <ga-checkbox label="snapchat">
          <ga-icon type="social-snapchat"></ga-icon>
          <span>Snapchat</span>
      </ga-checkbox>
  </ga-checkbox-group>
  <ga-checkbox-group v-model="fruit">
      <ga-checkbox label="香蕉"></ga-checkbox>
      <ga-checkbox label="苹果"></ga-checkbox>
      <ga-checkbox label="西瓜"></ga-checkbox>
  </ga-checkbox-group>
</template>
<script>
  export default {
      data () {
          return {
              social: ['facebook', 'github'],
              fruit: ['苹果']
          }
      }
  }
</script>
`;

code.all = `
<template>
    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
      <ga-checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</ga-checkbox>
    </div>
    <ga-checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
      <ga-checkbox label="香蕉"></ga-checkbox>
      <ga-checkbox label="苹果"></ga-checkbox>
      <ga-checkbox label="西瓜"></ga-checkbox>
    </ga-checkbox-group>
</template>
<script>
export default {
  data() {
    return {
      indeterminate: true,
      checkAll: false,
      checkAllGroup: ['香蕉', '西瓜']
    }
  },
  methods: {
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data) {
      if (data.length === 3) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    }
  }
}

</script>
`;

code.object = `
<template>
    <ga-checkbox-group 
      v-model="fruit" 
      @on-change="onChange"
      value-object>
      <ga-checkbox 
        :label="item"
        :value-object="item"
        v-for="(item, index) in fruitList"
        :key="index">{{item.label}}</ga-checkbox>
    </ga-checkbox-group>
    {{fruit}}
</template>
<script>
export default {
  data() {
    return {
      fruit: [],
      fruitList: [
        {
          value: 1,
          label: '香蕉'
        },
        {
          value: 2,
          label: '苹果'
        },
        {
          value: 3,
          label: '西瓜'
        }
      ]
    }
  },

  methods: {
    onChange(val) {
      console.log(val)
    }
  }
}

</script>

`

export default code;
