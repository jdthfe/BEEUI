<template>
  <li :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
      <div :class="[prefixCls + '-submenu-title']" ref="reference" @click="handleClick" v-if="!collapse">
        <slot name="icon"></slot>
        <slot name="title"></slot>
        <Icon type="ios-arrow-down" :class="[prefixCls + '-submenu-title-icon']"></Icon>
      </div>
    <div :class="styles" ref="reference" v-if="collapse">
      <slot name="icon"></slot>
    </div>
    <transition name="fade" v-if="mode === 'vertical'">
      <ul :class="stylesUl"  v-show="opened" @mouseleave="handleMouseleave">
        <slot></slot>
      </ul>
    </transition>
    <div name="slide-up" v-else>
      <transition name="fade">
        <Drop v-show="opened" placement="bottom" ref="drop" :style="dropStyle">
          <slot></slot>
        </Drop>
      </transition>
    </div>
  </li>
</template>
<script>
import Drop from '../select/dropdown.vue';
import Icon from '../icon/icon.vue';
import { getStyle, findComponentUpward } from '../../utils/assist';
import Emitter from '../../mixins/emitter';

const prefixCls = 'ga-menu';

export default {
  name: 'Submenu',
  mixins: [Emitter],
  components: { Icon, Drop },
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      active: false,
      opened: false,
      dropWidth: parseFloat(getStyle(this.$el, 'width')),
      parent: findComponentUpward(this, 'Menu'),
      collapse: false,
      timeout: null
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}-submenu`,
        {
          [`${prefixCls}-item-active`]: this.active,
          [`${prefixCls}-opened`]: this.opened,
          [`${prefixCls}-submenu-disabled`]: this.disabled
        }
      ];
    },
    styles() {
      return [
        `${prefixCls}-submenu-title`,
        {
          [`${prefixCls}-collapse`]: this.collapse
        }
      ];
    },
    stylesUl() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-collapse-ul`]: this.collapse
        }
      ];
    },
    mode() {
      return this.parent.mode;
    },
    accordion() {
      return this.parent.accordion;
    },
    dropStyle() {
      let style = {};

      if (this.dropWidth) style.minWidth = `${this.dropWidth}px`;
      return style;
    }
  },
  methods: {
    handleMouseenter() {
      if (this.disabled) return;
      if (this.mode === 'vertical' && !this.collapse) return;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        // this.parent.updateOpenKeys(this.name);
        this.opened = true;
      }, 50);
    },
    handleMouseleave() {
      if (this.disabled) return;
      if (this.mode === 'vertical' && !this.collapse) return;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        // this.parent.updateOpenKeys(this.name);
        this.opened = false;
      }, 100);
    },
    handleClick() {
      if (this.disabled) return;
      if (this.mode === 'horizontal') return;
      const opened = this.opened;
      if (this.accordion) {
        this.parent.$children.forEach(item => {
          if (item.$options.name === 'Submenu') item.opened = false;
        });
      }
      this.opened = !opened;
      this.parent.updateOpenKeys(this.name);
    }
  },
  watch: {
    mode(val) {
      if (val === 'horizontal') {
        this.$refs.drop.update();
      }
    },
    collapse() {
      this.opened = false
    },
    opened(val) {
      if (this.mode === 'vertical') return;
      if (val) {
        // set drop a width to fixed when menu has fixed position
        this.dropWidth = parseFloat(getStyle(this.$el, 'width'));
        this.$refs.drop.update();
      } else {
        this.$refs.drop.destroy();
      }
    }
  },
  mounted() {
    this.$on('on-menu-item-select', (name) => {
      if (this.mode === 'horizontal') this.opened = false;
      this.dispatch('Menu', 'on-menu-item-select', name);
      return true;
    });
    this.$on('on-update-active-name', (status) => {
      this.active = status;
    });
    this.$on('on-update-collapse', (collapse) => {
      this.collapse = collapse;
    });
  }
};

</script>
