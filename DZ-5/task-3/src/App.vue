<template>
    <product-panel :product-data="notebooksList"/>
</template>

<script>
    import ProductPanel from './components/ProductPanel.vue'
    import { notebooksList } from './constants/3_data_notebooks'

    export default {
      name: 'App',
        data() {
            return {
                notebooksList,
            }
        },
      components: {
          ProductPanel
      }
    }
</script>
