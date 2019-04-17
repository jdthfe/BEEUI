<template>
  <v-page>
    <ga-row>
      <basic-notice/>
      <other-notice/>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
          <table class="table table-bordered table-hover">
            <thead>
            <tr style="background-color: rgb(0, 136, 204); color: rgb(255, 255, 255);">
              <th>属性</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>title</td>
              <td>通知提醒的标题</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>desc</td>
              <td>通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>duration</td>
              <td>自动关闭的延时，单位秒，不关闭可以写 0</td>
              <td>Number</td>
              <td>4.5</td>
            </tr>
            <tr>
              <td>name</td>
              <td>当前通知的唯一标识</td>
              <td>String</td>
              <td>自动</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>关闭时的回调</td>
              <td>Function</td>
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
  import basicNotice from './module/basicNotice.vue'
  import otherNotice from './module/otherNotice.vue'

  export default {
    components: {
      basicNotice,
      otherNotice
    },
    data() {
      return {}
    },


    methods: {}
  }

</script>
