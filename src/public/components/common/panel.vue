<template>
  <div class="layout-content">
    <div class="layout-content-main">
      <div class="x_title ga-title">
        <h2> <!-- <i :class="moduleIcon"></i> -->
            <ga-icon type="android-more-vertical"></ga-icon>
            {{moduleName}}
            <span>{{smallName}}</span>
        </h2>
      </div>
      <div class="x_content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import gaIcon from '@/package/components/icon/icon.vue';

export default {
  components: {
    gaIcon
  },
  props: {
    moduleName: {
      type: String,
      default: ""
    },
    moduleIcon: {
      type: String,
      default: ""
    },
    smallName: {
      type: String,
      default: ""
    }
  }
}

</script>
