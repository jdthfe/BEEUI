<template>
  <ga-panel :moduleName="moduleName">
    <ga-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <ga-form-item label="姓名" prop="name">
        <ga-input v-model="formValidate.name" placeholder="请输入姓名"></ga-input>
      </ga-form-item>
      <ga-form-item label="邮箱" prop="mail">
        <ga-input v-model="formValidate.mail" placeholder="请输入邮箱"></ga-input>
      </ga-form-item>
      <ga-form-item label="城市" prop="city">
        <ga-select v-model="formValidate.city" placeholder="请选择所在地">
          <ga-option value="beijing">北京市</ga-option>
          <ga-option value="shanghai">上海市</ga-option>
          <ga-option value="shenzhen">深圳市</ga-option>
        </ga-select>
      </ga-form-item>
      <ga-form-item label="选择日期">
        <ga-row>
          <ga-col span="3">
            <ga-form-item prop="date">
              <ga-date-picker placeholder="选择开始日期" v-model="formValidate.date" />
            </ga-form-item>
          </ga-col>
          <ga-col span="2" style="text-align: center">-</ga-col>
          <ga-col span="3">
            <ga-form-item prop="endDate">
              <ga-date-picker placeholder="选择结束日期" v-model="formValidate.endDate" />
            </ga-form-item>
          </ga-col>
        </ga-row>
      </ga-form-item>
      <ga-form-item label="性别" prop="gender">
        <ga-radio-group v-model="formValidate.gender">
          <ga-radio label="male">男</ga-radio>
          <ga-radio label="female">女</ga-radio>
        </ga-radio-group>
      </ga-form-item>
      <ga-form-item label="爱好" prop="interest">
        <ga-checkbox-group v-model="formValidate.interest">
          <ga-checkbox label="吃饭"></ga-checkbox>
          <ga-checkbox label="睡觉"></ga-checkbox>
          <ga-checkbox label="跑步"></ga-checkbox>
          <ga-checkbox label="看电影"></ga-checkbox>
        </ga-checkbox-group>
      </ga-form-item>
      <ga-form-item label="介绍" prop="desc">
        <ga-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></ga-input>
      </ga-form-item>
      <ga-form-item>
        <ga-button type="primary" @on-click="handleSubmit('formValidate')">提交</ga-button>
        <ga-button type="ghost" @on-click="handleReset('formValidate')" style="margin-left: 8px">重置</ga-button>
      </ga-form-item>
    </ga-form>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import Vue from 'vue';
import moment from 'moment';
import gaForm from '@/package/components/form/form.vue';
import gaFormItem from '@/package/components/form/form-item.vue';
import gaSelect from '@/package/components/select/select.vue';
import gaOption from '@/package/components/select/option.vue';
import gaCheckbox from '@/package/components/checkbox/checkbox.vue'
import gaCheckboxGroup from '@/package/components/checkbox/checkbox-group.vue'
import gaRadioGroup from '@/package/components/radio/radio-group.vue';
import gaRadio from '@/package/components/radio/radio.vue';
import gaInput from '@/package/components/input/input.vue';
import gaDatePicker from "@/package/components/date-picker/index";
import gaTimePicker from '@/package/components/time-picker/index.js';
import gaButton from '@/package/components/button/button.vue';
import Message from '@/package/components/message/index';

Vue.prototype.$Message = Message;

import Code from '@/public/code/form.js'

export default {
  components: {
    gaForm,
    gaFormItem,
    gaSelect,
    gaOption,
    gaCheckbox,
    gaCheckboxGroup,
    gaRadioGroup,
    gaRadio,
    gaInput,
    gaDatePicker,
    gaTimePicker,
    gaButton,
  },

  data() {
    const validateEndDate = (rule, value, callback) => {
      const diffValue = moment(this.formValidate.endDate).diff(this.formValidate.date);
      if (diffValue <= 0) {
        callback(new Error('结束时间必须大于开始时间'));
      } else {
        callback();
      }
    }
    return {
      Code:Code,
      moduleName: '基本使用',
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        endDate: '',
        time: '',
        desc: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        city: [
          { required: true, message: '请选择城市', trigger: 'change' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        interest: [
          { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
          { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
        ],
        date: [
          { required: true, type: 'date', message: '请选择日期', trigger: 'change' },
          { validator: validateEndDate, trigger: 'change', message: '结束时间必须大于等于开始时间', type: 'date' },
        ],
        endDate: [
          { required: true, type: 'date', message: '请选择日期', trigger: 'change' },
          { validator: validateEndDate, trigger: 'change', message: '结束时间必须大于等于开始时间', type: 'date' },
        ],
        time: [
          { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请输入个人介绍', trigger: 'blur' },
          { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!');
        } else {
          this.$Message.error('表单验证失败!');
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
}

</script>
