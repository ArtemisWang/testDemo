import { reactive } from 'vue'
export default function () {
  const pageObj = reactive({
    width: '',
    height: ''
  })
  const showWh = () => {
    pageObj.width = document.documentElement.clientWidth;
    pageObj.height = document.documentElement.clientHeight;
  }
  return {
    pageObj,
    showWh
  }
}