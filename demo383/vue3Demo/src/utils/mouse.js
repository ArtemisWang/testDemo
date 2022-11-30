/*
 * @Author: artemis
 * @Date: 2022-03-13 14:11:14
 * @LastEditTime: 2022-03-13 15:31:45
 * @LastEditors: artemis
 * @Description: 
 */
import {
  ref,
  onMounted,
  onUnmounted
} from 'vue';

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
  }
  onMounted(() => {
    window.addEventListener('mousemove', update);
  });
  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });
  return {
    x,
    y
  };
}