/**
 * 归并排序（Merge Sort），是建立在归并操作上的一种有效的排序算法
 * 时间复杂度O(nlogn)，最好O(nlogn)，最坏O(nlogn)，空间复杂度O(n)，稳定
 * 算法描述：
 * 1. 把长度为n的输入序列分成两个长度为n/2的子序列；
 * 2. 对这两个子序列分别采用归并排序；
 * 3. 将两个排序好的子序列合并成一个最终的排序序列。
 */

// 代码实现
function merge(left, right) {
  const result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }

  return result
}

function mergeSort(arr) {
  const len = arr.length
  if (len < 2) {
    return arr
  }

  const middle = Math.floor(len / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

const a = [3, 4, 1, 5, 9, 2, 10, 6]

const sa = mergeSort(a)
console.log(sa)

/*
  时间复杂度证明：总时间=分解时间+解决问题时间+合并时间。
  分解时间就是把一个待排序序列分解成两序列，时间为一常数，时间复杂度o(1)。
  解决问题时间是两个递归式，把一个规模为n的问题分成两个规模分别为n/2的子问题，时间为2T(n/2)。
  合并时间复杂度为o（n）。总时间T(n)=2T(n/2)+o(n)。
  这个递归式可以用递归树来解，其解是o(nlogn)。
  此外在最坏、最佳、平均情况下归并排序时间复杂度均为o(nlogn)。
  从合并过程中可以看出合并排序稳定。

  用递归树来解就是，第一层时间代价为cn，第二层时间代价为cn/2+cn/2=cn...。
  每一层代价都是cn，总共有logn+1层。所以总的时间代价为cn*(logn+1)。时间复杂度是o(nlogn)。
 */

/**
 * 技巧：归并归并，先归类再合并，一个函数负责归，一个函数负责并
 */
