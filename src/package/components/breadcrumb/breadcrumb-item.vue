<template>
  <span>
    <a v-if="href" :target="target" :class="linkClasses" @click="handleClick">
        <slot></slot>
    </a>
    <span v-else :class="linkClasses">
        <slot></slot>
    </span>
    <span :class="separatorClasses" v-html="separator" v-if="!showSeparator"></span>
    <span :class="separatorClasses" v-else>
        <slot name="separator"></slot>
    </span>
  </span>
</template>
<script>
const prefixCls = "ga-breadcrumb-item"

export default {
  name: "BreadcrumbItem",
  props: {
    href: {
      type: String
    },
    replace: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      default: "_self"
    }
  },
  data() {
    return {
      separator: "",
      showSeparator: false
    }
  },
  computed: {
    linkClasses() {
      return `${prefixCls}-link`
    },
    separatorClasses() {
      return `${prefixCls}-separator`
    }
  },
  mounted() {
    this.showSeparator = this.$slots.separator !== undefined
  },
  methods: {
    handleClick() {
      const isRoute = this.$router
      if (isRoute) {
        this.replace
          ? this.$router.replace(this.href)
          : this.$router.push(this.href)
      } else {
        if (this.target === "_self") {
          window.location.href = this.href
        } else {
          window.open(this.href)
        }
      }
    }
  }
}
</script>
