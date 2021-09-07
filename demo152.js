// 二分搜索树，根节点比左子树大，比右子树小
class Node {
  constructor(v) {
    this.value = v
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
    this.size = 0
  }
  getSize() {
    return this.size
  }
  isEmpty() {
    return this.size === 0
  }
  addNode(v) {
    this.root = this._addChild(this.root, v)
  }
  // 添加节点时，需要比较添加的节点和当前节点值的大小
  _addChild(node, v) {
    if (!node) {
      // 找到空位返回新节点
      this.size++
      return new Node(v)
    }
    if (node.value > v) {
      node.left = this._addChild(node.left, v)
    } else if (node.value < v) {
      node.right = this._addChild(node.right, v)
    }
    return node
  }
  // 二分搜索树遍历（递归）
  // 先序遍历可用于打印树的结构
  // 先序遍历先访问根节点，然后访问左节点，最后访问右节点
  preTraversal() {
    this._pre(this.root)
  }
  _pre(node) {
    if (node) {
      console.log(node.value)
      this._pre(node.left)
      this._pre(node.right)
    }
  }
  // 中序遍历：左根右
  midTraversal() {
    this._mid(this.root)
  }
  _mid(node) {
    if (node) {
      this._mid(node.left)
      console.log(node.value)
      this._mid(node.right)
    }
  }
  // 后序遍历：左右根
  backTraversal() {
    this._back(this.root)
  }
  _back(node) {
    if (node) {
      this._back(node.left)
      this._back(node.right)
      console.log(node.value);

    }
  }
  // 广度遍历
  breadthTraversal() {
    if (!this.root) {
      return null
    }
    let q = new Queue()
    // 将根节点入队
    q.enQueue(this.root)
    // 循环判断队列是否为空，为空代表树遍历完毕
    while (!q.isEmpty()) {
      //将队首处队，判断是否有左右子树；有的话，就先左后右入队
      let n = q.deQueue()
      console.log(n.value)
      if (n.left) q.enQueue(n.left)
      if (n.right) q.enQueue(n.right)
    }
  }
  // 寻找最小值(从左节点向下找)
  getMin() {
    return this._getMin(this.root).value
  }
  _getMin(node) {
    if (!node.left) return node
    return this._getMin(node.left)
  }
  // 寻找最大值(从右节点向下找)
  getMax() {
    return this._getMax(this.root).value
  }
  _getMax(node) {
    if (!node.right) return node
    return this._getMax(node.right)
  }
  // 向下取整数(判断左子数)
  floor(v) {
    let node = this._floor(this.root, v)
    return node ? node.value : null
  }
  _floor(node, v) {
    if (!node) {
      return null
    }
    if (node.value === v) return v
    // 如果当前节点值比需要的值大，就继续递归
    if (node.value > v) {
      return this._floor(node.left, v)
    }
    // 判断当前节点是否拥有右子树
    let right = this._floor(node.right, v)
    if (right) return right
    return node
  }
  // 获取排名第几的节点的值
  _getSize(node) {
    return node ? node.size : 0
  }
  _addChild(node, v) {
    if (!node) {
      return new Node(v)
    }
    if (node.value > v) {
      node.size++
      node.left = this._addChild(node.left, v)
    } else if (node.value < v) {
      node.size++
      node.right = this._addChild(node.right, v)
    }
    return node
  }
  select(k) {
    let node = this._select(this.root, k)
    return node ? node.value : null
  }
  _select(node, k) {
    if (!node) return null
    // 先获取左子树下有几个节点
    let size = node.left ? node.left.size : 0
    // 判断size是否大于k
    // 如果大于k，代表所需要的节点在左节点
    if (size > k) return this._select(node.left, k)
    // 如果小于k，代表所需要的节点在右节点
    // 注意这里需要重新计算k值，减去根节点除了右子树的节点数量
    if (size < k) return this._select(node.right, k - size - 1)
    return node
  }
  // 删除最小节点
  deleteMin() {
    this.root = this._deleteMin(this.root)
    console.log(this.root)
  }
  _deleteMin(node) {
    // 一直递归左子树，如果左子树为空，就判断节点是否拥有右子树
    // 有右子树的话，就把需要删除的节点替换为右子树
    if ((node != null) && !node.left) return node.right
    node.left = this._deleteMin(node.left)
    // 最后需要重新维护节点的'size'属性
    node.size = this._getSize(node.left) + this._getSize(node.right) + 1
    return node
  }
  // 删除节点
  // 取出当前节点的后继节点（当前节点右子树的最小节点）来替换需要删除的节点
  // 这样原节点的左子树均小于后继节点
  // 原节点的删除后继节点后的右子树，均大于后继节点
  delete(v) {
    this.root = this._delete(this.root, v)
  }
  _delete(node, v) {
    if (!node) {
      return null
    }
    // 寻找的节点比当前节点大，去右子树找
    if (node.value < v) {
      node.right = this._delete(node.right, v)
    } else if (node.value > v) {
      // 寻找的节点比当前节点小，去左子树找
      node.left = this._delete(node.left, v)
    } else {
      // 进入这个条件，说明已经找到了节点
      // 先判断节点是否拥有左右子树的一个
      // 是的话，将子树返回出去，这里和'_deleteMin'的操作一样
      if (!node.left) return node.right
      if (!node.right) return node.left
      // 进入这里，代表节点拥有左右子树
      // 先取出当前节点的后继节点，也就是取出当前节点右子树的最小值
      let min = this._getMin(node.right)
      // 取出最小值后，删除最小值
      // 然后把删除节点后的子树赋值给最小值节点
      min.right = this._deleteMin(node.right)
      // 左子树不动
      min.left = node.left
      node = min
    }
    // 维护size
    node.size = this._getSize(node.left) + this._getSize(node.right) + 1
    return node
  }
}