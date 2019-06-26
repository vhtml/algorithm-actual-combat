/**
 * 选择排序（Selection Sort）
 * 时间复杂度O(n^2)，最好和最坏一样都是O(n^2)，空间复杂度O(1)，不稳定
 * 算法描述：
 * 1. 初始状态：无序区为R[1..n]，有序区为空；
 * 2. 第i趟排序(i=1,2,3…n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。
 *   该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，
 *   使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；
 * 3. n-1趟结束，数组有序化了。
 */

// 代码实现
function selectionSort(arr) {
  const len = arr.length
  let tmp; let
    minIndex

  for (let i = 0; i < len - 1; i += 1) {
    minIndex = i
    for (let j = i + 1; j < len; j += 1) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    tmp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = tmp
  }
  return arr
}


const a = [3, 4, 1, 4, 9, 2, 10, 5]

const sa = selectionSort(a)
console.log(sa)
