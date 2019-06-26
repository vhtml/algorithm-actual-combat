/**
 * 时间复杂度O(n^(1.3—2))，最坏O(n^2)，最好O(n)，空间复杂度O(1)，不稳定
 * 希尔排序，1959年Shell发明，第一个突破O(n^2)的排序算法，是简单插入排序的改进版。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。
 * 算法描述：
 * 1. 选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
 * 2. 按增量序列个数k，对序列进行k 趟排序；
 * 3. 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
 */

//  代码实现
function shellSort(arr) {
  const len = arr.length
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = 0; i < len; i += gap) {
      let j = i
      const current = arr[i]
      while (j - gap >= 0 && arr[j - gap] > current) {
        arr[j] = arr[j - gap]
        j -= gap
      }
      arr[j] = current
    }
  }
  return arr
}

const a = [3, 4, 1, 5, 9, 2, 10, 6]

const sa = shellSort(a)
console.log(sa)

/**
 * 希尔算法的时间复杂度证明比较麻烦，但很明显，它可以缩短元素移动的距离，从而减少元素移动的次数
 */

// 技巧：希尔排序是三层循环
