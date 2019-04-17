<template>
  <v-page>
    <ga-row>
      <basicbreadcrumb/>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
          <h4>breadcrumb props</h4>
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
                <td>separator</td>
                <td>自定义分隔符</td>
                <td>String | Element String</td>
                <td>/</td>
              </tr>
            </tbody>
          </table>
          <h4>BreadcrumbItem props</h4>
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
                <td>href</td>
                <td>链接，不传则没有链接</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>target</td>
                <td>打开方式配置，默认是本页面打开，_self/_blank可选</td>
                <td>String</td>
                <td>_self</td>
              </tr>
              <tr>
                <td>replace</td>
                <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td>
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
import basicbreadcrumb from './module/basicbreadcrumb.vue';
export default {
  components: {
    basicbreadcrumb,
  },
}

</script>
