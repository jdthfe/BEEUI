<template>
  <v-page>
    <ga-row>
      <basebadge/>
      <dotbadge/>
      <largetipdage/>
      <alonebadge/>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
          <div class="anchor">
            <h3 id="Badge_props">Badge props</h3>
          </div>
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
                <td>count</td>
                <td>显示的数字，大于<code>overflowCount</code>时，显示<code>${overflowCount}+</code>，为 0 时隐藏</td>
                <td>Number | String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>overflow-count</td>
                <td>展示封顶的数字值</td>
                <td>Number | String</td>
                <td>99</td>
              </tr>
              <tr>
                <td>dot</td>
                <td>不展示数字，只有一个小红点，如需隐藏 dot ，需要设置<code>count</code>为 0 </td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>class-name</td>
                <td>自定义的class名称，dot 模式下无效</td>
                <td>String</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basebadge from './module/basebadge.vue';
import dotbadge from './module/dotbadge.vue';
import largetipdage from './module/largetipdage.vue';
import alonebadge from './module/alonebadge.vue';
export default {
  components: {
    basebadge,
    dotbadge,
    largetipdage,
    alonebadge
  }
}

</script>
