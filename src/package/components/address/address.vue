<template>
  <div
    @click="showContent = !showContent"
    :style="classesStyles"
    v-clickoutside="handleClose"
    class="ga-adress-wrap"
    ref="reference">
      <div class="ga-adress-text-wrap" :style="{width: `${inputWidth}px`}">
        <div class="ga-adress-text" :title="inputTitle">{{inputTitle}}</div>
        <Icon type="ios-close" :class="[prefixCls + '-arrow']" v-show="showCloseIcon" @click.native.stop="clearSelect"></Icon>
      </div>
      <transition :name="transitionName">
        <Drop
          :class="dropdownBody"
          ref="dropdown"
          v-show="showContent"
          :placement="placement"
          :data-append-to-body="appendToBody"
          v-transfer-dom>
          <div class="ga-adress-content-wrap" :style="{width: `${width}px`}">
            <div class="tab-wrap tab-select clearfix">
              <div
                :class="['tab-item', 'fl', selectedIndex === index ? 'tab-item-select' : '']"
                v-for="(area, index) in comValues"
                :key="index"
                @click.stop="setSelectedIndex(index)">{{ area.name }}
              </div>
            </div>
            <div @click.stop="selectArea">
              <div 
                class="fl ga-adress-btn" 
                v-for="(area, index) in areaList" 
                :key="index" 
                :data-self-id="area.id"
                :class="classes(area)">{{area.name}}</div>
            </div>
          </div>
        </Drop>
      </transition>
  </div>
</template>
<script>
  import Icon from "../icon"
  import Drop from "./dropdown.vue"
  import clickoutside from "../../directives/clickoutside"
  import TransferDom from '../../directives/transfer-dom'
  import { oneOf } from "../../utils/assist"
  import Emitter from "../../mixins/emitter"
  
  const prefixCls = "ga-address"

  export default {
    name: 'gaAddress',
    mixins: [Emitter],
    components: { Drop, Icon },
    directives: { TransferDom, clickoutside },
    props: {
      value: Array,
      allAreas: Array,
      width: {
        type: Number,
        default: 450,
      },
      inputWidth: {
        type: Number,
        default: 200,
      },
      maxDeep: {
        type: Number,
        default: 3,
      },
      appendToBody: {
        type: Boolean,
        default: false
      },
      placement: {
        validator(value) {
          return oneOf(value, ["top", "bottom"]);
        },
        default: "bottom"
      },
      placeholder: {
        type: String,
        default: '请选择省市区'
      },
      clearable: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        prefixCls: prefixCls,
        selectedIndex: 0,
        showContent: false,
      }
    },
    computed: {
      showCloseIcon() {
        return this.clearable
      },
      classesStyles() {
        if(String(this.width).indexOf('%') > -1) return `width: ${this.width}`
        return `width: ${this.width}px;`
      },
      transitionName() {
        return this.placement === "bottom" ? "slide-up" : "slide-down";
      },
      dropdownBody() {
        return [
          {
            [`${prefixCls}-dropdown-body`]: this.appendToBody,
          }
        ];
      },
      comValues() {
        if (this.value.length < this.maxDeep) {
          return [ ...this.value, { name: '请选择' } ]
        }
        return [...this.value]
      },
      inputTitle() {
        let title = ''
        this.value.forEach((item) => {
          title += (item.name + ' ') || ''
        })
        return title || this.placeholder
      },
      areaList() {
        let list = this.value.reduce((result, item, index) => {
          if (index < this.selectedIndex) {
            return result.filter(area => area.id === this.value[index].id)[0].nodes
          }
          return result
        }, this.allAreas)
        return list
      }
    },
    watch: {
      showContent(val) {
        if(val) {
          this.broadcast("Drop", "on-update-popper")
        } else {
          this.broadcast("Drop", "on-destroy-popper")
        }
      }
    },
    methods: {
      classes(area) {
        return [
          {
            [`${prefixCls}-address-select`]: this.value[this.selectedIndex] && this.value[this.selectedIndex].name === area.name
          }
        ];
      },
      clearSelect() {
        
      },
      handleClose() {
        this.showContent = false
      },
      setSelectedIndex(index) {
        this.selectedIndex = index
      },
      selectArea(e) {
        const curValue = {
          id: e.target.dataset.selfId,
          name: e.target.innerText,
        }
        let arr = [...this.value]
        arr[this.selectedIndex] = curValue
        arr = arr.slice(0, this.selectedIndex + 1)
        this.$emit('input', arr)
        this.$emit('on-change', arr)
        if (this.selectedIndex < this.maxDeep - 1) {
          this.selectedIndex += 1
        } else if (this.selectedIndex === this.maxDeep - 1) {
          this.showContent = false
        }
      }
    }
  }
</script>