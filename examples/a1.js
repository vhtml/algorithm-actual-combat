/**
 * 冒泡排序（Bubble Sort）
 * 时间复杂度O(n^2)，最坏O(n^2)，最好O(n)，空间复杂度O(1)，稳定
 * 算法描述：
 * 1. 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
 * 2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
 * 3. 针对所有的元素重复以上的步骤，除了最后一个；
 * 4. 重复步骤1~3，直到排序完成。
 */

// 代码实现
function bubbleSort(arr) {
  const len = arr.length
  for (let i = 0; i < len - 1; i += 1) {
    for (let j = 0; j < len - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}

const a = [3, 4, 1, 4, 9, 2, 10, 5]

const sa = bubbleSort(a)
console.log(sa)

/**
 * 时间复杂度证明：
 * 由算法的实现可以看出总共的循环次数是一个1 + 2 +... + n - 1的一个等差数列，求和 S = (1 + n - 1) * (n - 1) / 2 = n * (n - 1) / 2，
 * 因此时间复杂度为O(n^2)
 */

/**
 * 但是很多书本说，冒泡算法的最佳时间复杂度为O(n)，即是在序列本来就是正序的情况下，
 * 从上面的算法实现上看，无论如何都会进行，因此复杂度仍为O(n^2)，这是怎么回事呢？
 * 实际上跟算法的实现有关，我们还有一个更优的写法。
 * 通过添加标记位，当内层循环一遍，没有任何交换时，可以认为排序已经结束。
 * 对于本来就是正序的情况，只需进行一次n - 1次的遍历操作，故最佳时间复杂度达到O(n)。
 */

//  优化后的冒泡排序
function bubbleSortOptimize(arr) {
  const len = arr.length
  let didSwap
  for (let i = 0; i < len - 1; i += 1) {
    didSwap = false
    for (let j = 0; j < len - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        didSwap = true
      }
    }
    if (!didSwap) {
      return arr
    }
  }
  return arr
}

const b = [1, 2, 3, 4, 5, 6, 7]
const c = [2, 1, 5, 7, 3, 4, 10]
const bs = bubbleSortOptimize(b)
console.log(bs)
const cs = bubbleSortOptimize(c)
console.log(cs)
