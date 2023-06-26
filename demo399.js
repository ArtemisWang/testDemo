
var sumNumbers = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return root.val;
  root.left && (root.left.val = root.val * 10 + root.left.val);
  root.right && (root.right.val = root.val * 10 + root.right.val);
  return sumNumbers(root.left) + sumNumbers(root.right);
};