<template>
  <v-page>
    <ga-row>
      <ga-col span="12"><basic-select/></ga-col>
      <ga-col span="12"><duoxuanselect/></ga-col>
      <ga-col span="12"><duojiselect/></ga-col>
      <ga-col span="12"><focusselect/></ga-col>
      <ga-col span="12"><tsselect/></ga-col>
      <ga-col span="12"><filterable/></ga-col>
      <ga-col span="12"><searchselect/></ga-col>
      <ga-col span="12"><objectselect/></ga-col>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
          <h4>select 配置</h4>
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
                <td>value</td>
                <td>指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array</td>
                <td>String | Number | Array</td>
                <td>空</td>
              </tr>
              <tr>
                <td>multiple</td>
                <td>是否支持多选</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>clearable</td>
                <td>是否可以清空选项，只在单选时有效</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>filterable</td>
                <td>是否支持搜索</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>remote</td>
                <td>是否使用远程搜索</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>remote-method</td>
                <td>远程搜索的方法</td>
                <td>Function</td>
                <td>接受两个参数val（当前值），oldval（上一次选中的值）</td>
              </tr>
              <tr>
                <td>loading</td>
                <td>当前是否正则远程搜索</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>loading-text</td>
                <td>远程搜索中的文字提示</td>
                <td>String</td>
                <td>加载中</td>
              </tr>
              <!-- <tr>
                                <td>label</td>
                                <td>仅在 remote 模式下，初始化时使用。因为仅通过 value 无法得知选项的 label，需手动设置。</td>
                                <td>String | Number | Array</td>
                                <td>空</td>
                            </tr> -->
              <tr>
                <td>size</td>
                <td>选择框大小，可选值为<code>large</code>和<code>small</code>或者不填</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>选择框默认文字</td>
                <td>String</td>
                <td>请选择</td>
              </tr>
              <tr>
                <td>not-found-text</td>
                <td>当下拉列表为空时显示的内容</td>
                <td>String</td>
                <td>无匹配数据</td>
              </tr>
              <tr>
                <td>label-in-value</td>
                <td>在返回选项时，是否将 label 和 value 一并返回，默认只返回 value</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>placement</td>
                <td>弹窗的展开方向，可选值为 <code>bottom</code> 和 <code>top</code></td>
                <td>String</td>
                <td>bottom</td>
              </tr>
              <tr>
                <td>removeFlag</td>
                <td>关闭多选input框中的单个选项的差号</td>
                <td>Boolean</td>
                <td>true</td>
              </tr>
              <tr>
                <td>origindata</td>
                <td>select扩展功能使用,具体查看多选带搜索展现形式业务组件</td>
                <td>Array</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>width</td>
                <td>select组件增加宽度设置(100或者10%)</td>
                <td>String,Number</td>
                <td>''</td>
              </tr>
              <tr>
                <td>prefix-icon</td>
                <td>输入框头部图标</td>
                <td>String</td>
                <td>''</td>
              </tr>
              <tr>
                <td>focus</td>
                <td>是否自动获取焦点，默认为false</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>append-to-body</td>
                <td>下拉弹窗是否添加到body中</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>value-object</td>
                <td>是否设置返回当前对象所有数据</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
          <h4>事件</h4>
          <table>
            <thead>
              <tr>
                <th>事件名</th>
                <th>说明</th>
                <th>返回值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>on-change</td>
                <td>选中的<code>Option</code>变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性</td>
                <td>当前选中项</td>
              </tr>
              <tr>
                <td>on-query-change</td>
                <td>搜索词改变时触发</td>
                <td>query</td>
              </tr>
              <tr>
                <td>on-focus</td>
                <td>select获取焦点时触发</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <h4>options 配置</h4>
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
                <td>value</td>
                <td>选项值，默认根据此属性值进行筛选，必填</td>
                <td>String | Number</td>
                <td>无</td>
              </tr>
              <tr>
                <td>label</td>
                <td>选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。大部分情况不需要配置此项，直接写入 slot 即可，在自定义选项时，该属性非常有用。</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>value-object</td>
                <td>将当前对象全部传入options组件中，配合select中的value-object进行一起使用</td>
                <td>Object</td>
                <td>{}</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用当前项</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basicSelect from './module/basicSelect.vue';
import duoxuanselect from './module/duoxuanselect.vue';
import duojiselect from './module/duojiselect.vue';
import tsselect from './module/tsselect.vue';
import filterable from './module/filterable.vue';
import searchselect from './module/searchselect.vue';
import focusselect from './module/focusselect.vue'
import objectselect from './module/objectselect.vue'
export default {
  components: {
    basicSelect,
    duoxuanselect,
    duojiselect,
    focusselect,
    tsselect,
    filterable,
    searchselect,
    objectselect
  }
}

</script>
