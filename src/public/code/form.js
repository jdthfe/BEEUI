let code = {};

code.base = `
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
export default {
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

`;

code.zdy = `
<template>
  <ga-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <ga-form-item label="姓名" prop="name">
      <ga-input v-model="formValidate.name" placeholder="请输入姓名"></ga-input>
    </ga-form-item>
    <ga-form-item label="邮箱" prop="mail">
      <ga-input v-model="formValidate.mail" placeholder="请输入邮箱"></ga-input>
    </ga-form-item>
    <ga-form-item label="字符串" prop="str">
      <ga-input v-model="formValidate.str" placeholder="请输入姓名"></ga-input>
    </ga-form-item>
    <ga-form-item label="城市" prop="city">
      <ga-select v-model="formValidate.city" multiple placeholder="请选择所在地">
        <ga-option value="beijing">北京市</ga-option>
        <ga-option value="shanghai">上海市</ga-option>
        <ga-option value="shenzhen">深圳市</ga-option>
      </ga-select>
    </ga-form-item>
    <ga-form-item>
      <ga-button type="primary" @on-click="handleSubmit('formValidate')">提交</ga-button>
      <ga-button type="ghost" @on-click="handleReset('formValidate')" style="margin-left: 8px">重置</ga-button>
    </ga-form-item>
  </ga-form>
</template>
<script>
export default {
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
</script>
`

code.inline = `
<template>
  <ga-panel :moduleName="moduleName">
    <ga-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-size="14" :label-width="80">
      <ga-form-item label="姓名" prop="name">
        <ga-input v-model="formValidate.name" placeholder="请输入姓名"></ga-input>
      </ga-form-item>
      <ga-form-item label="邮箱" prop="mail">
        <ga-input v-model="formValidate.mail" placeholder="请输入邮箱"></ga-input>
      </ga-form-item>
      <ga-form-item label="性别" prop="gender" inline>
        <RadioGroup v-model="formValidate.gender">
          <ga-radio label="male">男</ga-radio>
          <ga-radio label="female">女</ga-radio>
        </RadioGroup>
      </ga-form-item>
      <ga-form-item label="爱好" prop="interest" inline>
        <CheckboxGroup v-model="formValidate.interest">
          <ga-checkbox label="吃饭"></ga-checkbox>
          <ga-checkbox label="睡觉"></ga-checkbox>
          <ga-checkbox label="跑步"></ga-checkbox>
          <ga-checkbox label="看电影"></ga-checkbox>
        </CheckboxGroup>
      </ga-form-item>
      <ga-form-item>
        <ga-button type="primary" @on-click="handleSubmit('formValidate')">提交</ga-button>
        <ga-button type="ghost" @on-click="handleReset('formValidate')" style="margin-left: 8px">重置</ga-button>
      </ga-form-item>
    </ga-form>
  </ga-panel>
</template>
<script>
export default {
  data() {
    return {
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
`
export default code;
