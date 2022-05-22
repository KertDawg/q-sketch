import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'Sketch',

  setup () {
    return () => h(QBadge, {
      class: 'Sketch',
      label: 'Sketch'
    })
  }
}
