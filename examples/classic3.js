/**
 * 插入排序（Insertion Sort）
 * 时间复杂度O(n^2)，最坏O(n^2)，最好O(n)，空间复杂度O(1)，稳定。
 * 一般来说，插入排序都采用in-place在数组上实现
 * 算法描述：
 * 1. 从第一个元素开始，该元素可以认为已经被排序；
 * 2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；
 * 3. 如果该元素（已排序）大于新元素，将该元素移到下一位置；
 * 4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 * 5. 将新元素插入到该位置后；
 * 6. 重复步骤2~5。
 */

//  代码实现
function insertionSort(arr) {
  const len = arr.length
  let current; let
    preIndex
  for (let i = 1; i < len; i += 1) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex -= 1
    }
    arr[preIndex + 1] = current
  }
  return arr
}

const a = [3, 4, 1, 5, 9, 2, 10, 6]

const sa = insertionSort(a)
console.log(sa)

/**
 * 时间复杂度证明：
 * 两层循环，很容易证明是O(n^2)。
 * 但当数组本来就是正序的情况下，内层循环不会进行，因此只需遍历一次，所以最佳情况为O(n)
 */
