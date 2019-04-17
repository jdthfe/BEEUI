<template>
  <v-page>
    <ga-row>
      <basicpanel/>
      <simplepanel/>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
          <h4>API说明</h4>
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
                <td>module-name</td>
                <td>面板主标题</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>small-name</td>
                <td>副标题</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>icon</td>
                <td>配合icon进行使用</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>simple</td>
                <td>精简版使用</td>
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
import basicpanel from './module/basicpanel.vue';
import simplepanel from './module/simplepanel.vue';
export default {
  components: {
    basicpanel,
    simplepanel
  },
}

</script>
