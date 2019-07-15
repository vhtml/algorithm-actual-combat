/**
 * 快速排序（Quick Sort）
 * 基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，
 * 则可分别对这两部分记录继续进行排序，以达到整个序列有序。
 * 时间复杂度O(nlogn)，最坏O(n^2)，最好O(nlogn)，空间复杂度O(nlogn)，不稳定
 * 快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。
 * 算法描述：
 * 1. 从数列中挑出一个元素，称为“基准”（pivot）；
 * 2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。
 *    在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
 * 3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
 */

// 代码实现
// 实现一
function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function partition(arr, left, right) {
  const pivot = left
  let index = pivot + 1
  for (let i = index; i <= right; i += 1) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index += 1
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1
}

function quickSort(arr, left, right) {
  const len = arr.length
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : len - 1

  if (left < right) {
    const partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}
// 实现二
function quickSort2(arr, left, right) {
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : arr.length - 1
  if (left >= right) return arr

  const pivot = arr[left]
  let i = left
  let j = right
  while (i < j) {
    while (i < j && arr[j] >= pivot) {
      j -= 1
    }
    swap(arr, i, j)
    while (i < j && arr[i] <= pivot) {
      i += 1
    }
    swap(arr, i, j)
  }
  quickSort2(arr, left, i - 1)
  quickSort2(arr, i + 1, right)
  return arr
}

const a = [3, 4, 1, 5, 9, 2, 10, 6]

const sa = quickSort(a)
console.log(sa)

const a1 = [3, 4, 1, 5, 9, 2, 10, 6]

const sa1 = quickSort2(a1)
console.log(sa1)

/**
 * 时间复杂度证明
  平均时间复杂度分析：
  T(1) = 1;
  T(n) = 2*T(n/2) + a*n;(a为常数，每次合并时，复杂度为O(n))
  = 2*(2*T(n/4)+a*n/2) + a*n
  = 4*T(n/4) + 2*a*n
  = 4*(2*T(n/8)+a*n/4) + 2*a*n
  = 8*T(n/8) + 3*a*n
  =......
  = 2^k*T(1) + k*a*n  (其中n==2^k,即k=log2(n))
  = n + a*n*log2(n);
  所以时间复杂度为O(nlogn)
  注意：对左右分别快排时，可能出现一遍元素个数为0，这是最坏情况，此时时间复杂度为O(n^2)
 */
