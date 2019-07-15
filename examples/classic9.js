/**
 * Bucket Sort（桶排序）
 * 基本思想：桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。
 * 工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，
 * 每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排）。
 * 时间复杂度O(n+k)，最坏O(n^2)，最好O(n)，空间复杂度O(n+k)，稳定。
 * 算法描述：
 * 1. 设置一个定量的数组当作空桶；
 * 2. 遍历输入数据，并且把数据一个一个放到对应的桶里去；
 * 3. 对每个不是空的桶进行排序；
 * 4. 从不是空的桶里把排好序的数据拼接起来。
 */

// 算法实现
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

function bucketSort(arr, bucketSize) {
  if (arr.length === 0) {
    return arr
  }

  let minValue = arr[0]
  let maxValue = arr[0]
  for (let i = 1; i < arr.length; i += 1) {
    if (minValue > arr[i]) {
      minValue = arr[i]
    } else if (maxValue < arr[i]) {
      maxValue = arr[i]
    }
  }
  // 桶的初始化
  bucketSize = bucketSize || 5 // 设置桶的默认数量为5
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets = new Array(bucketCount)

  for (let i = 0; i < buckets.length; i += 1) {
    buckets[i] = []
  }
  // 利用映射函数将数据分配到各个桶中
  for (let i = 0; i < arr.length; i += 1) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i])
  }

  arr.length = 0

  for (let i = 0; i < buckets.length; i += 1) {
    // 对每个桶进行排序，这里使用了插入排序
    insertionSort(buckets[i])
    for (let j = 0; j < buckets[i].length; j += 1) {
      arr.push(buckets[i][j])
    }
  }

  return arr
}

const a = [3, 4, 1, 5, 9, 2, 10, 6]

const sa = bucketSort(a)
console.log(sa)

/**
 * 时间复杂度：
 * 桶排序最好情况下使用线性时间O(n)，桶排序的时间复杂度，取决与对各个桶之间数据进行排序的时间复杂度，
 * 因为其它部分的时间复杂度都为O(n)。很显然，桶划分的越小，各个桶之间的数据越少，排序所用的时间也会越少。
 * 但相应的空间消耗就会增大。
 */
