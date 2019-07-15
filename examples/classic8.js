/**
 * 计数排序（Counting Sort）
 * 基本思想：计数排序不是基于比较的排序算法，其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。
 * 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
 * 时间复杂度O(n+k)，最坏O(n+k)，最好O(n+k)，空间复杂度O(n+k)，稳定。
 * 算法描述：
 * 1. 找出待排序的数组中最大和最小的元素；
 * 2. 统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
 * 3. 对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
 * 4. 反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。
 */

// 代码实现
function countingSort(arr) {
  let maxValue = arr[0]
  for (let i = 1; i <= arr.length; i += 1) {
    if (maxValue < arr[i]) {
      maxValue = arr[i]
    }
  }

  const bucket = new Array(maxValue + 1)
  const arrLen = arr.length
  const bucketLen = maxValue + 1
  let sortedIndex = 0

  for (let i = 0; i < arrLen; i += 1) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]] += 1
  }

  for (let j = 0; j < bucketLen; j += 1) {
    while (bucket[j] > 0) {
      arr[sortedIndex] = j
      bucket[j] -= 1
      sortedIndex += 1
    }
  }

  return arr
}

const a = [3, 4, 1, 5, 9, 2, 10, 6]

const sa = countingSort(a)
console.log(sa)

/**
 * 算法分析：
 * 计数排序是一个稳定的排序算法。当输入的元素是 n 个 0到 k 之间的整数时，时间复杂度是O(n+k)，空间复杂度也是O(n+k)，
 * 其排序速度快于任何比较排序算法。当k不是很大并且序列比较集中时，计数排序是一个很有效的排序算法。
 */
