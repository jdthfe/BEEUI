<template>
  <li :class="classes">
    {{ data.label }}
    <i v-if="data.children && data.children.length" class="ga-icon ga-icon-ios-arrow-right"></i>
    <!-- <i v-if="showLoading" class="ga-icon ga-icon-load-c ga-load-loop"></i> -->
  </li>
</template>
<script>
export default {
  name: 'Casitem',
  props: {
    data: Object,
    prefixCls: String,
    tmpItem: Object,
    selectedValue:{
      type:Array,
      default(){
        return []
      }
    }
  },
  computed: {
    classes() {
      // wangqi 修改
      //TODO 目前支持4级联动，再多需要自己手动添加，这里实现的方法比较差，后期想办法优化
      let value;

      if(this.selectedValue.length){
        value = this.selectedValue
      }else if (this.$parent.selectedValue.length){
        value = this.$parent.selectedValue
      }else if (this.$parent.$parent.selectedValue && this.$parent.$parent.selectedValue.length){
        value = this.$parent.$parent.selectedValue
      }else{
        value = this.$parent.$parent.$parent.selectedValue || []
      }

      return [
        `${this.prefixCls}-menu-item`, {
          // [`${this.prefixCls}-menu-item-active`]:this.tmpItem.value && this.tmpItem.value === this.data.value,
          [`${this.prefixCls}-menu-item-active`]:value.join(',').includes(this.data.value),
          [`${this.prefixCls}-menu-item-hover`]:this.tmpItem.value && this.tmpItem.value === this.data.value,
          [`${this.prefixCls}-menu-item-disabled`]: this.data.disabled
        }
      ];
    },
    // showLoading () {
    //   // console.log(this.data.loading)
    //   return this.data.loading;
    // }
  }
};
</script>
