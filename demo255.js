/*
 * @Author: yating.wang
 * @Date: 2021-11-04 15:54:32
 * @LastEditTime: 2021-11-04 16:11:27
 * @LastEditors: yating.wang
 * @Description: 重建二叉树
 */
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
function rebuildTree(preArr, midArr) {
  if(!preArr.length) return 
  let root = new Tree(preArr[0])
  let rootIndex=midArr.indexOf(preArr[0])
  root.left = rebuildTree(preArr.slice(1, rootIndex + 1), midArr.slice(0, rootIndex))||null
  root.right = rebuildTree(preArr.slice(rootIndex + 1), midArr.slice(rootIndex + 1)) || null
  return root
}
console.log(rebuildTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]))