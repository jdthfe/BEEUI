<template>
  <div style="overflow: hidden;">
    <ga-tooltip :content="showFlag ? '收起' : '展开'" placement="right" style="float: left;width: 100%;">
      <ga-icon type="code" class="icon-code" @click.native="showFn" v-show="!show"></ga-icon>
    </ga-tooltip>
    <pre :class="{bg: bg}" v-show="show || showFlag">
      <code :class="language" ref="code">
        <slot></slot>
      </code>
    </pre>
  </div>
</template>
<script>
import gaTooltip from '@/package/components/tooltip/tooltip.vue';
import gaIcon from '@/package/components/icon/icon.vue'
import hljs from "highlightjs/highlight.pack.js"
/**
 * 引入高亮highlight.js相关库文件
 */
import "highlightjs/styles/github.css"

export default {
  name: "Code",
  props: {
    language: {
      type: String,
      default: "javascript"
    },
    bg: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {
    gaIcon,
    gaTooltip
  },
  data() {
    return {
      code: "",
      showFlag: false
    }
  },
  mounted() {
    this.code = this.$refs.code.innerHTML.replace(/\n/, "")
    this.$refs.code.innerHTML = this.code
    hljs.highlightBlock(this.$refs.code)
  },
  methods: {
    showFn() {
      this.showFlag = !this.showFlag  
    }
  }
};
</script>
<style scoped>
.icon-code {
  float: left;
  font-size: 20px;
  cursor: pointer;
  height: 60px;
  line-height: 60px;
  display: inline-block;
  width: 100%;
}
div {
  position: relative;
  font-size: 14px;
}

span.copy,
span.scale,
span.open-fiddle {
  border-radius: 0 0 3px 3px;
  padding: 2px 5px;
  position: absolute;
  top: 5px;
  right: 0;
  color: #b2b2b2;
  cursor: pointer;
}

span.scale {
  right: 25px;
}

span.open-fiddle {
  right: 50px;
}

.bg + span.copy {
  right: 5px;
}

span.copy:hover,
span.scale:hover,
span.open-fiddle:hover {
  color: #5c6b77;
}

.code-scale-modal .ga-modal-body {
  background-color: #f7f7f7;
}

.code-scale-modal pre {
  font-size: 14px;
}
</style>