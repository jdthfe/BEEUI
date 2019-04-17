<template>
  <v-page>
    <ga-row>
      <basicdatepicker/>
      <confirmdatepicker/>
      <disabledatepicker/>
      <shifenmiao/>
      <sizedatepicker/>
      <conditions-datepicker/>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
          <h4>DatePicker props</h4>
          <table>
            <colgroup>
              <col>
              <col>
              <col>
              <col width="200">
            </colgroup>
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
              <td>type</td>
              <td>显示类型，可选值为 <code>date</code>、 <code>week</code>、 <code>daterange</code>、<code>datetime</code>、<code>datetimerange</code>、<code>year</code>、<code>month</code>、<code>season</code>、<code>monthrange</code>
              </td>
              <td>String</td>
              <td>date</td>
            </tr>
            <tr>
              <td>value</td>
              <td>
                日期，可以是 JavaScript 的 Date，例如 <strong>new Date()</strong>，也可以是标准的日期格式，点击右边查看
                <br>
                <font color="red">注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用</font>
                <br>
                <font color="red">注意：按周查询目前如果设置初始值，只能传Date类型</font>
                <br>
                <font color="red">注意：按月区间查询如果设置初始值，只能传Date类型</font>
              </td>
              <td><a href="javascript:void(0)"><i class="ivu-icon ivu-icon-information-circled"></i> Date</a></td>
              <td>-</td>
            </tr>
            <tr>
              <td>format</td>
              <td>展示的日期格式
                <font color="red">(week目前只支持yyyy-WW,输出为2015年第20周)</font>
                <font color="red">(monthrange目前只支持yyyy-MR,输出为2018-01至2018-02)</font>
              </td>
              <td><a href="javascript:void(0)"><i class="ivu-icon ivu-icon-information-circled"></i> Date</a></td>
              <td>
                <ul>
                  <li><strong>date | daterange</strong>：
                    <br>yyyy-MM-dd
                  </li>
                  <li><strong>datetime | datetimerange</strong>：
                    <br>yyyy-MM-dd HH:mm:ss
                  </li>
                  <li><strong>year</strong>：yyyy</li>
                  <li><strong>month</strong>：yyyy-MM</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>placement</td>
              <td>日期选择器出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>
              </td>
              <td>String</td>
              <td>bottom-start</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>占位文本</td>
              <td>String</td>
              <td>空</td>
            </tr>
            <tr>
              <td>options</td>
              <td>选择器额外配置，比如不可选日期与快捷选项，具体项详见下表</td>
              <td>Object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>confirm</td>
              <td>是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>open</td>
              <td>手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用</td>
              <td>Boolean</td>
              <td>null</td>
            </tr>
            <tr>
              <td>size</td>
              <td>尺寸，可选值为<code>large</code>和<code>small</code>或者不设置</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用选择器</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>clearable</td>
              <td>是否显示清除按钮</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td>完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>editable</td>
              <td>文本框是否可以输入，只在没有使用 slot 时有效</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>width</td>
              <td>宽度设置（200或者10%）</td>
              <td>String,Number</td>
              <td>200</td>
            </tr>
            </tbody>
          </table>
          <h4>options</h4>
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
              <td>shortcuts</td>
              <td>
                设置快捷选项，每项内容：
                <ul>
                  <li><strong>text | String</strong>：显示的文案</li>
                  <li><strong>value | Function</strong>：返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调</li>
                  <li><strong>onClick | Function</strong>：点击时的回调，参数为当前日期选择器的 Vue 实例，当需要自定义复杂操作时，可以使用</li>
                </ul>
              </td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabledDate</td>
              <td>设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天</td>
              <td>Function</td>
              <td>-</td>
            </tr>
            </tbody>
          </table>
          <h4>DatePicker events</h4>
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
              <td>日期发生变化时触发</td>
              <td>已经格式化后的日期，比如 2016-01-01</td>
            </tr>
            <tr>
              <td>on-open-change</td>
              <td>弹出日历和关闭日历时触发</td>
              <td>true | false</td>
            </tr>
            <tr>
              <td>on-ok</td>
              <td>在 confirm 模式下有效，点击确定按钮时触发</td>
              <td>-</td>
            </tr>
            <tr>
              <td>on-clear</td>
              <td>在 confirm 模式或 clearable = true 时有效，在清空日期时触发</td>
              <td>-</td>
            </tr>
            <tr>
              <td>get-week</td>
              <td>按周查询时候添加使用，可以直接获取选中的周数，格式为：2017-02（2017年第二周）</td>
              <td>-</td>
            </tr>
            <tr>
              <td>get-season</td>
              <td>按季度查询时候添加使用</td>
              <td>-</td>
            </tr>
            <tr>
              <td>get-monthrange</td>
              <td>按月区间查询时候添加使用</td>
              <td>-</td>
            </tr>
            </tbody>
          </table>
          <h4>DatePicker slot</h4>
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
              <td>自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例</td>
            </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
  import basicdatepicker from './module/basicdatepicker.vue';
  import confirmdatepicker from './module/confirmdatepicker.vue';
  import disabledatepicker from './module/disabledatepicker.vue';
  import shifenmiao from './module/shifenmiao.vue';
  import sizedatepicker from './module/sizedatepicker.vue';
  import conditionsDatepicker from './module/conditionsdatepicker.vue';
  export default {
    components: {
      basicdatepicker,
      confirmdatepicker,
      disabledatepicker,
      shifenmiao,
      sizedatepicker,
      conditionsDatepicker
    }
  }

</script>
