<template>
  <ga-panel :moduleName="moduleName">
    <v-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <v-form-item label="姓名" prop="name">
        <v-input v-model="formValidate.name" placeholder="请输入姓名"></v-input>
      </v-form-item>
      <v-form-item label="邮箱" prop="mail">
        <v-input v-model="formValidate.mail" placeholder="请输入邮箱"></v-input>
      </v-form-item>
      <v-form-item label="字符串" prop="str">
        <v-input v-model="formValidate.str" placeholder="请输入姓名"></v-input>
      </v-form-item>
      <v-form-item label="城市" prop="city">
        <v-select v-model="formValidate.city" multiple placeholder="请选择所在地">
          <v-option value="beijing">北京市</v-option>
          <v-option value="shanghai">上海市</v-option>
          <v-option value="shenzhen">深圳市</v-option>
        </v-select>
      </v-form-item>
      <v-form-item>
        <v-button type="primary" @on-click="handleSubmit('formValidate')">提交</v-button>
        <v-button type="ghost" @on-click="handleReset('formValidate')" style="margin-left: 8px">重置</v-button>
      </v-form-item>
    </v-form>
    <v-code language="html">
      {{Code.zdy}}
    </v-code>
  </ga-panel>
</template>
<script>
import Vue from 'vue';
import vForm from '@/package/components/form/form.vue';
import vFormItem from '@/package/components/form/form-item.vue';
import vSelect from '@/package/components/select/select.vue';
import vOption from '@/package/components/select/option.vue';
import vCheckbox from '@/package/components/checkbox/checkbox.vue'
import CheckboxGroup from '@/package/components/checkbox/checkbox-group.vue'
import RadioGroup from '@/package/components/radio/radio-group.vue';
import vRadio from '@/package/components/radio/radio.vue';
import vInput from '@/package/components/input/input.vue';
import DatePicker from '@/package/components/date-picker/picker.vue';
import TimePicker from '@/package/components/time-picker/index.js';
import vButton from '@/package/components/button/button.vue';
import Message from '@/package/components/message/index';

Vue.prototype.$Message = Message;

import Code from '@/public/code/form.js'

export default {
  components: {
    vForm,
    vFormItem,
    vSelect,
    vOption,
    vCheckbox,
    CheckboxGroup,
    RadioGroup,
    vRadio,
    vInput,
    DatePicker,
    TimePicker,
    vButton,
  },

  data() {
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password'));
      } else {
        if (this.formValidate.mail !== '') {
          // 对第二个邮箱单独验证
          this.$refs.formValidate.validateField('mail');
        }
        callback();
      }
    };
    return {
      Code: Code,
      moduleName: '自定义',
      formValidate: {
        name: '',
        mail: '',
        city: [],
        str: ''
      },
      ruleValidate: {
        name: [
          { validator: validateName, required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        city: [
          { type: 'array', required: true, max: 2, message: '最多选择两个城市', trigger: 'change' }
        ],
        str: [
          { type: 'string', min: 20, required: true, message: '大于20个字节', trigger: 'change' }
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
