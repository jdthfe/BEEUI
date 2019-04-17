<template>
  <ga-panel :moduleName="moduleName">
    <v-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-size="14" :label-width="80">
      <v-form-item label="姓名" prop="name">
        <v-input v-model="formValidate.name" placeholder="请输入姓名"></v-input>
      </v-form-item>
      <v-form-item label="邮箱" prop="mail">
        <v-input v-model="formValidate.mail" placeholder="请输入邮箱"></v-input>
      </v-form-item>
      <v-form-item label="性别" prop="gender" inline>
        <RadioGroup v-model="formValidate.gender">
          <v-radio label="male">男</v-radio>
          <v-radio label="female">女</v-radio>
        </RadioGroup>
      </v-form-item>
      <v-form-item label="爱好" prop="interest" inline>
        <CheckboxGroup v-model="formValidate.interest">
          <v-checkbox label="吃饭"></v-checkbox>
          <v-checkbox label="睡觉"></v-checkbox>
          <v-checkbox label="跑步"></v-checkbox>
          <v-checkbox label="看电影"></v-checkbox>
        </CheckboxGroup>
      </v-form-item>
      <v-form-item>
        <v-button type="primary" @on-click="handleSubmit('formValidate')">提交</v-button>
        <v-button type="ghost" @on-click="handleReset('formValidate')" style="margin-left: 8px">重置</v-button>
      </v-form-item>
    </v-form>
    <v-code language="html">
      {{Code.inline}}
    </v-code>
  </ga-panel>
</template>
<script>
import Vue from "vue";
import vForm from "@/package/components/form/form.vue";
import vFormItem from "@/package/components/form/form-item.vue";
import vSelect from "@/package/components/select/select.vue";
import vOption from "@/package/components/select/option.vue";
import vCheckbox from "@/package/components/checkbox/checkbox.vue";
import CheckboxGroup from "@/package/components/checkbox/checkbox-group.vue";
import RadioGroup from "@/package/components/radio/radio-group.vue";
import vRadio from "@/package/components/radio/radio.vue";
import vInput from "@/package/components/input/input.vue";
import DatePicker from "@/package/components/date-picker/picker.vue";
import TimePicker from "@/package/components/time-picker/index.js";
import vButton from "@/package/components/button/button.vue";
import Message from "@/package/components/message/index";

Vue.prototype.$Message = Message;

import Code from "@/public/code/form.js";

export default {
  name: "InlineForm",
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
    vButton
  },

  data() {
    return {
      Code: Code,
      moduleName: "inline使用",
      formValidate: {
        name: "",
        mail: "",
        gender: "",
        interest: [],
        date: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" }
        ],
        gender: [{ required: true, message: "请选择性别", trigger: "change" }],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "至少选择一个爱好",
            trigger: "change"
          },
          {
            type: "array",
            max: 2,
            message: "最多选择两个爱好",
            trigger: "change"
          }
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "请选择日期",
            trigger: "change"
          }
        ]
      }
    };
  },

  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功!");
        } else {
          this.$Message.error("表单验证失败!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
