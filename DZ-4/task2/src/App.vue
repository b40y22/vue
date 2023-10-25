<template>
  <product-panel :product-data="raspberryList"/>
</template>

<script>
import ProductPanel from './components/ProductPanel.vue'
import { raspberryList } from './constants/2_data_raspberry'
export default {
  name: 'App',
  components: {
    ProductPanel
  },
  data() {
    return {
      raspberryList,
    }
  },

}
</script>
