<template>
    <div class="ga-select-dropdown" :style="styles"><slot></slot></div>
</template>
<script>
import Vue from "vue";
const isServer = Vue.prototype.$isServer;
import { getStyle } from "../../utils/assist";
const Popper = isServer
  ? function() {}
  : require("popper.js").default; // eslint-disable-line

// const Popper = isServer
//   ? function() {}
//   : require("popper.js").default; // eslint-disable-line

export default {
  name: "Drop",
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    }
  },
  data() {
    return {
      popper: null,
      width: ""
    };
  },
  computed: {
    styles() {
      let style = {};
      if (this.width) style.width = `${this.width}px`;
      if (this.placement === "bottom-start") style.top = `auto`;
      if (this.placement === "top") style.top = `-145px`;
      return style;
    }
  },
  methods: {
    update() {
      if (isServer) return;

      //todo 避免popper自动计算tooltip显示的位置，注释这段代码，改为固定显示设置
      if (this.popper) {
        this.$nextTick(() => {
          this.popper.update();
        });
      } else {
        this.$nextTick(() => {
          // this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
          //     gpuAcceleration: false,
          //     placement: this.placement,
          //     boundariesPadding: 0,
          //     forceAbsolute: true,
          //     boundariesElement: 'body'
          // });
          // /**
          //  * 使用了最新的版本的popper 没有onCreate方法，使用update代替
          //  */
          // this.popper.update(popper => {
          //     this.resetTransformOrigin(popper);
          // });
          this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
            placement: this.placement,
            modifiers: {
              computeStyle: {
                gpuAcceleration: false
              }
            },
            onCreate: () => {
              this.resetTransformOrigin();
              this.$nextTick(this.popper.update());
            },
            onUpdate: () => {
              this.resetTransformOrigin();
            }
          });
        });
      }

      // set a height for parent is Modal and Select's width is 100%
      if (this.$parent.$options.name === "iSelect") {
        this.width = parseInt(getStyle(this.$parent.$el, "width"));
      }
    },
    destroy() {
      if (this.popper) {
        // this.resetTransformOrigin(this.popper);
        setTimeout(() => {
          this.popper.destroy();
          this.popper = null;
        }, 300);
      }
    },
    resetTransformOrigin(popper) {
      /**
       * popper对象有popper属性，没有私有_popper属性
       */
      let placement = this.popper.popper.getAttribute("x-placement").split("-")[0];
      this.popper.popper.style.transformOrigin = placement === "bottom" ? "center top" : "center bottom";
    }
  },
  created() {
    this.$on("on-update-popper", this.update);
    this.$on("on-destroy-popper", this.destroy);
  },
  beforeDestroy() {
    if (this.popper) {
      this.popper.destroy();
    }
  }
};
</script>
