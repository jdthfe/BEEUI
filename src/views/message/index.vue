<template>
  <v-page>
    <ga-row>
      <basicmessage/>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
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
                <td>content</td>
                <td>提示内容</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>duration</td>
                <td>自动关闭的延时，单位秒，不关闭可以写 0</td>
                <td>Number</td>
                <td>1.5</td>
              </tr>
              <tr>
                <td>onClose</td>
                <td>关闭时的回调</td>
                <td>Function</td>
                <td>-</td>
              </tr>
              <tr>
                <td>top</td>
                <td>提示组件距离顶端的距离，单位像素</td>
                <td>Number</td>
                <td>24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basicmessage from './module/basicmessage.vue';
export default {
  components: {
    basicmessage,
  },
  data() {
    return {}
  },


  methods: {

  }
}

</script>
