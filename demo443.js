/*
 * @Author: yating.wang
 * @Date: 2023-02-02 16:30:02
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-02 20:40:19
 * @Description: 
 */
var isSymmetric = function (root) {

  const isSame = function (left, right) {
    if (!left && !right) return true;
    if (!left || !right || left && right && left.val !== right.val) {
      return false;
    }
    return isSame(left.left, right.right) && isSame(left.right, right.left);
  };
  return isSame(root.left, root.right);

};