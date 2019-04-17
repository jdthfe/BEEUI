<template>
  <v-page>
    <ga-row>
      <basicrate/>
      <halfrate/>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
          <h4>api</h4>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basicrate from './module/basicrate.vue';
import halfrate from './module/halfrate.vue';

export default {
  components: {
    basicrate,
    halfrate
  },
}
</script>