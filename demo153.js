// 平衡二叉树：空树或者左右两个子树的高度差的绝对值不超过1，并且左右两棵子树都是平衡二叉树
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.height = 1
  }
}

class AVL {
  constructor() {
    this.root = null
  }
  addNode(v) {
    this.root = this._addNode(this.root, v)
  }
  _addNode(node, v) {
    if (!node) {
      return new Node(v)
    }
    if (node.value > v) {
      node.left = this._addNode(node.left, v)
    } else if (node.value < v) {
      node.right = this._addNode(node.right, v)
    } else {
      node.value = v
    }
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right))
    let factor = this._getBalanceFactor(node)
    // 当需要右旋时，根节点的左树一定比右树高度高
    if (factor > 1 && this._getBalanceFactor(node.left) >= 0) {
      return this._rightRotate(node)
    }
    // 当需要左旋时，根节点的右树一定比左树高度高
    if (factor < -1 && this._getBalanceFactor(node.right) <= 0) {
      return this._leftRotate(node)
    }
    // 左右情况
    // 节点的左树比右树高，且节点的左树的右树比节点的左树的左树高
    if (factor > 1 && this._getBalanceFactor(node.left) < 0) {
      node.left = this._leftRotate(node.left)
      return this._rightRotate(node)
    }
    // 左右情况
    // 节点的右树比左树高，且节点的右树的左树比节点的右树的右树高
    if (factor < -1 && this._getBalanceFactor(node.right) > 0) {
      node.right = this._rightRotate(node.right)
      return this._leftRotate(node)
    }
  }
  _getHeight(node) {
    if (!node) return 0
    return node.height
  }
  _getBalanceFactor(node) {
    // 返回值>0表示左子树高，<0表示右子树高
    return this._getHeight(node.left) - this._getHeight(node.right)
  }
  _rightRotate(node) {
    // 右旋
    // 旋转后的新根节点
    let newRoot = node.left
    // 需要移动的节点
    let moveNode = newRoot.right
    newRoot.right = node
    node.left = moveNode
    // 更新树的高度
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right))
    newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right))
    return newRoot
  }
  _leftRotate(node) {
    // 左旋
    // 旋转后的新根节点
    let newRoot = node.right
    // 需要移动的节点
    let moveNode = newRoot.left
    newRoot.left = node
    node.right = moveNode
    // 更新树的高度
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right))
    newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right))
    return newRoot
  }
}