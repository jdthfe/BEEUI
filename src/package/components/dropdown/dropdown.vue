<template>
    <div
        :class="[prefixCls]"
        v-clickoutside="handleClose"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
        ref="dropdwonRef">
        <div :class="[prefixCls + '-rel']" ref="reference" @click="handleClick"><slot></slot></div>
        <div :name="transition">
            <Drop v-show="currentVisible" :placement="placement" ref="drop" :style="widthStyle"><slot name="list"></slot></Drop>
        </div>
    </div>
</template>
<script>
import Drop from "../select/dropdown.vue";
import clickoutside from "../../directives/clickoutside";
import { oneOf } from "../../utils/assist";

const prefixCls = "ga-dropdown";

export default {
  name: "Dropdown",
  directives: { clickoutside },
  components: { Drop },
  props: {
    trigger: {
      validator(value) {
        return oneOf(value, ["click", "hover", "custom"]);
      },
      default: "hover"
    },
    placement: {
      validator(value) {
        return oneOf(value, [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "left",
          "left-start",
          "left-end",
          "right",
          "right-start",
          "right-end"
        ]);
      },
      default: "bottom"
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    transition() {
      return ["bottom-start", "bottom", "bottom-end"].indexOf(this.placement) >
        -1
        ? "slide-up"
        : "fade";
    },
    widthStyle() {
      return `width: ${this.width}px`
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      currentVisible: this.visible,
      width: null
    };
  },
  watch: {
    visible(val) {
      this.currentVisible = val;
    },
    currentVisible(val) {
      if (val) {
        this.$refs.drop.update();
      } else {
        this.$refs.drop.destroy();
      }
      this.$emit("on-visible-change", val);
    }
  },
  methods: {
    handleClick() {
      if (this.trigger === "custom") return false;
      if (this.trigger !== "click") {
        return false;
      }
      this.currentVisible = !this.currentVisible;
    },
    handleMouseenter() {
      if (this.trigger === "custom") return false;
      if (this.trigger !== "hover") {
        return false;
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.currentVisible = true;
      }, 250);
    },
    handleMouseleave() {
      if (this.trigger === "custom") return false;
      if (this.trigger !== "hover") {
        return false;
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.currentVisible = false;
      }, 150);
    },
    handleClose() {
      if (this.trigger === "custom") return false;
      if (this.trigger !== "click") {
        return false;
      }
      this.currentVisible = false;
    },
    hasParent() {
      const $parent = this.$parent.$parent.$parent;
      if ($parent && $parent.$options.name === "Dropdown") {
        return $parent;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.width = this.$refs.dropdwonRef.clientWidth

    this.$on("on-click", key => {
      const $parent = this.hasParent();
      if ($parent) $parent.$emit("on-click", key);
    });
    this.$on("on-hover-click", () => {
      const $parent = this.hasParent();
      if ($parent) {
        this.$nextTick(() => {
          if (this.trigger === "custom") return false;
          this.currentVisible = false;
        });
        $parent.$emit("on-hover-click");
      } else {
        this.$nextTick(() => {
          if (this.trigger === "custom") return false;
          this.currentVisible = false;
        });
      }
    });
    this.$on("on-haschild-click", () => {
      this.$nextTick(() => {
        if (this.trigger === "custom") return false;
        this.currentVisible = true;
      });
      const $parent = this.hasParent();
      if ($parent) $parent.$emit("on-haschild-click");
    });
  }
};
</script>
