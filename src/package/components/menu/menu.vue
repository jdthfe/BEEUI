<template>
  <ul :class="classes" :style="styles">
    <slot></slot>
  </ul>
</template>
<script>
import { oneOf, findComponentsDownward } from "../../utils/assist";
import Emitter from "../../mixins/emitter";

const prefixCls = "ga-menu";

export default {
  name: "Menu",
  mixins: [Emitter],
  props: {
    mode: {
      validator(value) {
        return oneOf(value, ["horizontal", "vertical"]);
      },
      default: "vertical"
    },
    theme: {
      validator(value) {
        return oneOf(value, ["light", "dark", "primary"]);
      },
      default: "light"
    },
    activeName: {
      type: [String, Number]
    },
    openNames: {
      type: Array,
      default() {
        return [];
      }
    },
    accordion: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "240px"
    },
    collapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentActiveName: this.activeName,
      opened: false
    };
  },
  computed: {
    classes() {
      let theme = this.theme;
      if (this.mode === "vertical" && this.theme === "primary") theme = "light";

      return [
        `${prefixCls}`,
        `${prefixCls}-${theme}`,
        {
          [`${prefixCls}-${this.mode}`]: this.mode
        }
      ];
    },
    styles() {
      let style = {};

      if (this.mode === "vertical") {
        if (this.collapse) {
          style.width = '60px';
        } else {
          style.width = this.width;
        }
      }

      return style;
    }
  },
  methods: {
    updateActiveName() {
      if (!this.currentActiveName) {
        this.currentActiveName = -1;
      }
      this.broadcast("Submenu", "on-update-active-name", false);
      this.broadcast(
        "MenuItem",
        "on-update-active-name",
        this.currentActiveName
      );
    },
    updateOpenKeys(name) {
      const index = this.openNames.indexOf(name);

      if (index > -1) {
        this.openNames.splice(index, 1);
      } else {
        this.openNames.push(name);
      }
      // todo 由于监控了openNames变量的watch，所以这里需要在此删减数组最后一项
      if (this.openNames.length > 1) {
        this.openNames.splice(1, 1);
      }
    },
    updateOpened() {
      const items = findComponentsDownward(this, "Submenu");

      if (items.length) {
        items.forEach(item => {
          if (this.openNames.indexOf(item.name) > -1) item.opened = true;
        });
        // for(let v of items){
        //     if (this.openNames.indexOf(v.name) > -1) v.opened = true;
        // }
      }
    }
  },
  mounted() {
    // this.updateOpened();
    // todo 新增监听菜单选中方法
    this.updateActiveName();
    this.$off("on-menu-item-select")
    this.$on("on-menu-item-select", name => {
      this.currentActiveName = name;
      this.$emit("on-select", name);
    });
  },
  watch: {
    openNames() {
      //todo 由于初始化控制打开项是传进来的，所以通过watch来控制
      this.updateActiveName();
      this.updateOpened();
      this.$off("on-menu-item-select")
      this.$on("on-menu-item-select", name => {
        this.currentActiveName = name;
        this.$emit("on-select", name);
      });
      this.$emit("on-open-change", this.openNames);
    },
    activeName(val) {
      this.currentActiveName = val;
    },
    currentActiveName() {
      this.updateActiveName();
    },
    collapse() {
      this.broadcast("Submenu", "on-update-collapse", this.collapse);
      this.broadcast(
        "MenuItem",
        "on-update-collapse",
        this.collapse
      );
    }
  }
};
</script>
