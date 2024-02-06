import '@/app/assets/main.css'

import {createApp,type Directive} from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

/*
* Кастомная директива. Позволяющая кликнуть вне текущего элемента и закрыть определенный элемент.
*
* v-click-outside="() => {elem = false}"
* */
app.directive('click-outside', <Directive>{
  mounted(element, { value }) {
    element.clickOutside = function (event: Event) {
      if (!(element == event.target || element.contains(event.target))) {
        value(event)
      }
    }
    document.body.addEventListener('click', element.clickOutside)
  },

  unmounted(element, { value }) {
    document.body.removeEventListener('click', element.clickOutside)
  }
})

app.mount('#app')
