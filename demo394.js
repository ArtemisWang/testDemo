/*
 * @Author: artemis
 * @Date: 2022-11-30 14:16:37
 * @LastEditors: artemis
 * @LastEditTime: 2022-11-30 14:23:07
 * @Description: echarts-line折线图label防遮挡方案
 */
/**
 1. 计算每个label点左侧和右侧的斜率k
 2. 判断该点label的最佳显示位置并记录到数组中，有六种情况：top、topRight、topLeft、bottom、bottomRight、bottomLeft
 3. 当配置series的label时，读取位置数组中的label位置信息，使用formatter为label设置rich样式
 4. 根据实际情况调整rich样式，padding中的值决定了label的偏移量
 */
function getRichStyle(color = '#333333') {
  return {
    bottom: {
      ...this.getLabelFontStyle(color),
      padding: [-30, 0, 0, 0]
    },
    bottomRight: {
      ...this.getLabelFontStyle(color),
      padding: [-30, -24, 0, 0]
    },
    bottomLeft: {
      ...this.getLabelFontStyle(color),
      padding: [-30, 24, 0, 0]
    },
    top: {
      ...this.getLabelFontStyle(color),
      padding: [0, 0, 0, 0]
    },
    topLeft: {
      ...this.getLabelFontStyle(color),
      padding: [0, 24, 0, 0]
    },
    topRight: {
      ...this.getLabelFontStyle(color),
      padding: [0, -24, 0, 0]
    }
  };
}
// 计算k
function countEchartsK(data) {
  const kArr = [];
  const countKFunc = (item, index, i) => {
    kArr[index] || (kArr[index] = [0, 0, 0]);
    if (index === 0 || item[i] == null) return;
    const [x1, y1] = [index - 1, ((index > 1 && (data[index - 1] != null)) ? data[index - 1][i] : 0)];
    const [x2, y2] = [index + 1, ((data[index + 1] != null && data[index + 1][i] != null) ? data[index + 1][i] : 0)];
    let k1 = (item[i] - y1) / (index - x1);
    let k2 = (y2 - item[i]) / (x2 - index);
    isNaN(k1) && (k1 = 0);
    isNaN(k2) && (k2 = 0);
    if (k1 >= 0) {
      if (k2 >= 0) {
        k1 >= k2 && (kArr[index][i] = 'topLeft');
        k1 < k2 && (kArr[index][i] = 'bottomRight');
      } else {
        kArr[index][i] = 'top';
      }
    } else {
      if (k2 >= 0) {
        kArr[index][i] = 'bottom';
      } else {
        k1 >= k2 && (kArr[index][i] = 'topRight');
        k1 < k2 && (kArr[index][i] = 'bottomLeft');
      }
    }
  };
  data.forEach((item, index) => {
    countKFunc(item, index, 1);
    countKFunc(item, index, 2);
  });
  return kArr;
}