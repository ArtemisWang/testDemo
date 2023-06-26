var buildTree = function (inorder, postorder) {
  if (!postorder || !postorder.length) return null
  let value = postorder.pop()
  const root = new TreeNode(value)
  let index = inorder.indexOf(value)
  root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
  root.right = buildTree(inorder.slice(index + 1), postorder.slice(index))
  return root
}