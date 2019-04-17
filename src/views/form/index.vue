<template>
  <v-page>
    <ga-row>
      <basica-form/>
      <zdy-form/>
      <inlineform/>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
          <h4>Form props</h4>
          <table>
            <thead>
              <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>model</td>
                <td>表单数据对象</td>
                <td>Object</td>
                <td>-</td>
              </tr>
              <tr>
                <td>rules</td>
                <td>表单验证规则，具体配置查看 <a href="https://github.com/yiminghe/async-validator" target="_blank"><i class="ivu-icon ivu-icon-social-github"></i> async-validator</a></td>
                <td>Object</td>
                <td>-</td>
              </tr>
              <tr>
                <td>inline</td>
                <td>是否开启行内表单模式</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>label-position</td>
                <td>表单域标签的位置，可选值为 <code>left</code>、<code>right</code>、<code>top</code></td>
                <td>String</td>
                <td>right</td>
              </tr>
              <tr>
                <td>label-width</td>
                <td>表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值</td>
                <td>Number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>label-size</td>
                <td>表单域标签的字体大小，所有的 FormItem 都会继承 Form 组件的 label-size 的值</td>
                <td>Number</td>
                <td>12</td>
              </tr>
              <tr>
                <td>show-message</td>
                <td>是否显示校验错误信息</td>
                <td>Boolean</td>
                <td>true</td>
              </tr>
            </tbody>
          </table>
          <h4>Form methods </h4>
          <table>
            <thead>
              <tr>
                <th>方法名</th>
                <th>说明</th>
                <th>参数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>validate</td>
                <td>对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败</td>
                <td>callback</td>
              </tr>
              <tr>
                <td>validateField</td>
                <td>对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息</td>
                <td>callback</td>
              </tr>
              <tr>
                <td>resetFields</td>
                <td>对整个表单进行重置，将所有字段值重置为空并移除校验结果</td>
                <td>无</td>
              </tr>
            </tbody>
          </table>
          <h4>FormItem props</h4>
          <table>
            <thead>
              <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>prop</td>
                <td>对应表单域 model 里的字段</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>label</td>
                <td>标签文本</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>label-width</td>
                <td>表单域标签的的宽度</td>
                <td>Number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>inline</td>
                <td>是否开启单个FormItem行内表单模式</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>label-size</td>
                <td>表单域标签的字体大小</td>
                <td>Number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>required</td>
                <td>是否必填，如不设置，则会根据校验规则自动生成</td>
                <td>Boolean</td>
                <td>-</td>
              </tr>
              <tr>
                <td>rules</td>
                <td>表单验证规则</td>
                <td>Number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>error</td>
                <td>表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>show-message</td>
                <td>是否显示校验错误信息</td>
                <td>Boolean</td>
                <td>true</td>
              </tr>
            </tbody>
          </table>
          <h4>FormItem slot</h4>
          <table>
            <thead>
              <tr>
                <th>名称</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>无</td>
                <td>内容</td>
              </tr>
              <tr>
                <td>label</td>
                <td>label 内容</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basicaForm from "./module/basicaform.vue";
import zdyForm from "./module/zdyfrom.vue";
import inlineform from "./module/inlineform.vue";
export default {
  components: {
    basicaForm,
    zdyForm,
    inlineform
  }
};
</script>
