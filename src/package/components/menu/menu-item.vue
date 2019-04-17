<template>
  <li :class="classes" @click.stop="handleClick">
    <slot></slot>
    <slot name="title" v-if="!collapse"></slot>
    <ul v-show="(collapse && $parent.$el && $parent.$el.className !== 'ga-menu-item-group') && $parent.$el.className === 'ga-menu ga-menu-light ga-menu-vertical'" :class="stylesUl" v-else>
      <li class="ga-menu-item">
        <slot name="title"></slot>
      </li>
    </ul>
  </li>
</template>
<script>
import Emitter from '../../mixins/emitter';
const prefixCls = 'ga-menu';

export default {
  name: 'MenuItem',
  mixins: [Emitter],
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
      active: false,
      collapse: false
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-active`]: this.active,
          [`${prefixCls}-item-selected`]: this.active,
          [`${prefixCls}-item-disabled`]: this.disabled
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
    }
  },
  methods: {
    handleClick() {
      if (this.disabled) return;

      let parent = this.$parent;
      let name = parent.$options.name;
      while (parent && (!name || name !== 'Submenu')) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
      }

      if (parent) {
        this.dispatch('Submenu', 'on-menu-item-select', this.name);
      } else {
        this.dispatch('Menu', 'on-menu-item-select', this.name);
      }
    }
  },
  mounted() {
    this.$on('on-update-active-name', (name) => {
      if (this.name === name) {
        this.active = true;
        this.dispatch('Submenu', 'on-update-active-name', true);
      } else {
        this.active = false;
      }
    });
    this.$on('on-update-collapse', (collapse) => {
      this.collapse = collapse;
    });
  }
};

</script>
