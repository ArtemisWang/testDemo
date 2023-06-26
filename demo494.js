var isRectangleOverlap = function (rec1, rec2) {
  return (Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0])) && (Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1]))
}

console.log(isRectangleOverlap([2, 17, 6, 20], [3, 8, 6, 20]))