<template>
  <v-page>
    <ga-row>
      <basictable/>
      <complexrow/>
      <fixedtable/>
      <duoxuantable/>
      <danxuantable/>
      <searchtable/>
      <daochutable/>
      <servertable/>
      <indextable/>
      <createrendertable/>
    </ga-row>
    <ga-panel moduleName="API说明">
      <div class="api">
        <h4>api</h4>
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
              <td>data</td>
              <td>显示的结构化数据，其中，字段 cellClassName 用于设置任意单元格的样式名称，因此数据不能使用该字段，详见示例<strong>特定样式</strong>。</td>
              <td>Array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>columns</td>
              <td>表格列的配置描述，具体项见后文</td>
              <td>Array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>stripe</td>
              <td>是否显示间隔斑马纹</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>border</td>
              <td>是否显示纵向边框</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>show-header</td>
              <td>是否显示表头</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>width</td>
              <td>表格宽度，单位 px</td>
              <td>Number | String</td>
              <td>自动</td>
            </tr>
            <tr>
              <td>height</td>
              <td>表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头</td>
              <td>Number | String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>highlight-row</td>
              <td>是否支持高亮选中的行，即单选</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>row-class-name</td>
              <td>
                行的 className 的回调方法，传入参数：
                <ul>
                  <li><code>row</code>：当前行数据</li>
                  <li><code>index</code>：当前行的索引</li>
                </ul>
              </td>
              <td>Function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>表格尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不填</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>no-data-text</td>
              <td>数据为空时显示的提示内容</td>
              <td>String</td>
              <td>暂无数据</td>
            </tr>
            <tr>
              <td>no-filtered-data-text</td>
              <td>筛选数据为空时显示的提示内容</td>
              <td>String</td>
              <td>暂无筛选结果</td>
            </tr>
            <tr>
              <td>initsort</td>
              <td>设置默认排序配置(例如{ column:1, sort:'desc' })</td>
              <td>Object</td>
              <td>{ column:'', sort:'' }
              </td>
            </tr>
            <tr>
              <td>highlightRowIndex</td>
              <td>设置默认高亮行配置</td>
              <td>String</td>
              <td>''</td>
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
              <td>on-current-change</td>
              <td>开启 <code>highlight-row</code> 后有效，当表格的当前行发生变化的时候会触发</td>
              <td>
                <ul>
                  <li><code>currentRow</code>：当前高亮行的数据</li>
                  <li><code>oldCurrentRow</code>：上一次高亮的数据</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>on-select</td>
              <td>在多选模式下有效，选中某一项时触发</td>
              <td>
                <ul>
                  <li><code>selection</code>：已选项数据</li>
                  <li><code>row</code>：刚选择的项数据</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>on-select-all</td>
              <td>在多选模式下有效，点击全选时触发</td>
              <td>
                <ul>
                  <li><code>selection</code>：已选项数据</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>on-selection-change</td>
              <td>在多选模式下有效，只要选中项发生变化时就会触发</td>
              <td>
                <ul>
                  <li><code>selection</code>：已选项数据</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>on-sort-change</td>
              <td>排序时有效，当点击排序时触发</td>
              <td>
                <ul>
                  <li><code>column</code>：当前列数据</li>
                  <li><code>key</code>：排序依据的指标</li>
                  <li><code>order</code>：排序的顺序，值为 <code>asc</code> 或 <code>desc</code></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>on-row-click</td>
              <td>单击某一行时触发</td>
              <td>
                当前行的数据
              </td>
            </tr>
            <tr>
              <td>on-row-dblclick</td>
              <td>双击某一行时触发</td>
              <td>
                当前行的数据
              </td>
            </tr>
            <tr>
              <td>on-expand</td>
              <td>展开或收起某一行时触发</td>
              <td>
                <ul>
                  <li><code>row</code>：当前行的数据</li>
                  <li><code>status</code>：当前的状态</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <h4>table slot</h4>
        <table>
          <thead>
            <tr>
              <th>名称</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>header</td>
              <td>表头</td>
            </tr>
            <tr>
              <td>footer</td>
              <td>页脚</td>
            </tr>
          </tbody>
        </table>
        <h4>table methods</h4>
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
              <td>exportCsv</td>
              <td>
                将数据导出为 <code>.csv</code> 文件，说明：
                <ul>
                  <li>支持IE9~IE11、Edge、Chrome、Safari、Firefox 全系列浏览器。</li>
                  <li>IE9、Safari 需要手动修改后缀名为 <code>.csv</code>。</li>
                  <li>IE9暂时只支持英文，中文会显示为乱码。</li>
                </ul>
              </td>
              <td>
                params(Object):
                <ul>
                  <li><strong>filename</strong> 文件名，默认为 table.csv
                  </li>
                  <li><strong>original</strong> 是否导出为原始数据，默认为 true
                  </li>
                  <li><strong>noHeader</strong> 不显示表头，默认为 false
                  </li>
                  <li><strong>columns</strong> 自定义导出的列数据
                  </li>
                  <li><strong>data</strong> 自定义导出的行数据
                  </li>
                </ul>
                说明：columns 和 data 需同时声明，声明后将导出指定的数据，建议列数据有自定义render时，可以根据需求自定义导出内容
              </td>
            </tr>
          </tbody>
        </table>
        <h4>column </h4>
        <p>列描述数据对象，是 columns 中的一项</p>
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
              <td>type</td>
              <td>列渲染形式，默认不设置，如果需要添加多选设置为'selection'，如果需要单选设置为'radiotion'，单选配合highlight-row和on-current-change一起使用
                <br>
                <font color="red">注意：当type='selection'时候，如果加上show：true则只显示title，否则显示title及checkbox</font>
              </td>
              <td>String</td>
              <td></td>
            </tr>
            <tr>
              <td>title</td>
              <td>列头显示文字</td>
              <td>String</td>
              <td>#</td>
            </tr>
            <tr>
              <td>key</td>
              <td>对应列内容的字段名</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>width</td>
              <td>列宽</td>
              <td>Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>align</td>
              <td>对齐方式，可选值为 <code>left</code> 左对齐、<code>right</code> 右对齐和 <code>center</code> 居中对齐</td>
              <td>String</td>
              <td>left</td>
            </tr>
            <tr>
              <td>className</td>
              <td>列的样式名称</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>fixed</td>
              <td>列是否固定在左侧或者右侧，可选值为 <code>left</code> 左侧和 <code>right</code> 右侧</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>ellipsis</td>
              <td>开启后，文本将不换行，超出部分显示为省略号</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>render</td>
              <td>自定义渲染列，使用 Vue 的 Render 函数。包含 row、column、index和context，分别指当前行数据，当前列数据，当前行索引，当前上下文，详见固定左右列和顶部示例。
                <br>
                <font color="red">注意：如果在当前vue对象中使用context，那么定义的方法中通过context.$parent找到相应的vue实例</font>
                <br>
                <font color="red">注意：如果在其他js中使用context，那么定义的方法中通过context找到相应的vue实例</font>
                <br>
                <font color="red">当type='createRender'时，支持render函数支持createElement写法，接受h和ctx两个参数</font>
              </td>
              <td>Function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>function</td>
              <td>配合render使用，给自定义dom添加自定义事件</td>
              <td>Object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>renderHeader</td>
              <td>自定义列头显示内容，传入参数有两个，<code>column</code> 和 <code>index</code>，分别为当前列数据和当前列索引，不支持渲染自定义组件</td>
              <td>Function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>sortable</td>
              <td>对应列是否可以排序，如果设置为 <code>custom</code>，则代表可以自定义前端排序。监听 Table 的 on-sort-change 事件配合使用；设置为true时，显示是前端排序</td>
              <td>Boolean/String</td>
              <td>--</td>
            </tr>
            <tr>
              <td>sortMethod</td>
              <td>自定义排序使用的方法，接收三个参数 a 、 b 和 type，当设置 <code>sortable: true</code> 时有效。type 值为 asc 和 desc</td>
              <td>Function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>filters</td>
              <td>过滤数据的选项，格式为数组，数组中每项包含 <code>label</code> 、 <code>value</code> 和 <code>column</code>属性，使用过滤，必须同时配置 filterMethod</td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>filterMethod</td>
              <td>数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示</td>
              <td>Function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>filterMultiple</td>
              <td>数据过滤的选项是否多选</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>filteredValue</td>
              <td>在初始化时使用过滤，数组，值为需要过滤的 value 集合</td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>filterRemote</td>
              <td>使用远程过滤</td>
              <td>Function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>hidden</td>
              <td>隐藏表头不能隐藏列,仅复杂表头时使用，一般情况下不需要添加</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>cellrowspan,cellcolspan</td>
              <td>合并多行配置项，目前只支持合并三行和合并两行操作，如果合并三行，则配置cellrowspan=3，cellcolspan=1,数据每行也得增加cellrowspan=3，cellcolspan=1配置，具体数据接口可以查看多行合并实例</td>
              <td>Number,String</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <h4>theader </h4>
        <p>设置复杂表头需要增加的配置项</p>
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
              <td>title</td>
              <td>列头显示文字</td>
              <td>String</td>
              <td>#</td>
            </tr>
            <tr>
              <td>key</td>
              <td>对应列内容的字段名</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>width</td>
              <td>列宽</td>
              <td>Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>align</td>
              <td>对齐方式，可选值为 <code>left</code> 左对齐、<code>right</code> 右对齐和 <code>center</code> 居中对齐</td>
              <td>String</td>
              <td>left</td>
            </tr>
            <tr>
              <td>className</td>
              <td>列的样式名称</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>fixed</td>
              <td>列是否固定在左侧或者右侧，可选值为 <code>left</code> 左侧和 <code>right</code> 右侧</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>ellipsis</td>
              <td>开启后，文本将不换行，超出部分显示为省略号</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>hidden</td>
              <td>隐藏表头不能隐藏列,复杂表头时使用</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>rowspan,colspan</td>
              <td>表头多行合并配置项，如果合并2行，则配置rowspan=2，colspan=1,同时配合hidden参数使用，具体查看复杂表头实例</td>
              <td>Number,String</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <h4>表体data</h4>
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
              <td>_disabled</td>
              <td>当表格第一列为多选才能生效，控制当前行是否可选</td>
              <td>Boolean</td>
              <td>false</td>
            </tr> 
          </tbody>
        </table>
      </div>
    </ga-panel>
  </v-page>
</template>
<script>
import basictable from './module/basictable.vue';
import fixedtable from './module/fixedtable.vue';
import daochutable from './module/daochutable.vue';
import duoxuantable from './module/duoxuantable.vue';
import searchtable from './module/searchtable.vue';
import complexrow from './module/complexRow.vue';
import servertable from './module/servertable.vue';
import danxuantable from './module/danxuantable.vue';
import indextable from './module/indextable.vue';
import createrendertable from './module/createrendertable.vue';
export default {
  name: 'indexRoot',
  components: {
    basictable,
    fixedtable,
    daochutable,
    duoxuantable,
    searchtable,
    complexrow,
    servertable,
    danxuantable,
    indextable,
    createrendertable
  },
}

</script>
