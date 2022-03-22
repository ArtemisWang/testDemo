/*
 * @Author: yating.wang
 * @Date: 2022-03-13 18:48:26
 * @LastEditTime: 2022-03-13 20:18:15
 * @LastEditors: yating.wang
 * @Description: 
 */
import {
  ref,
  watch
} from 'vue'
export default function useFavicon(newIcon) {
  const favicon = ref(newIcon)
  const updateIcon = (icon) => {
    console.log('update', icon)
    document.head.querySelectorAll('link[rel="icon"]').forEach(el => {
      el.href = `${icon}`
    })
  }
  const reset = () => favicon.value = '/favicon.ico'
  watch(favicon, (i) => {
    console.log('watch', i)
    updateIcon(i)
  })
  return {
    favicon,
    reset
  }
}