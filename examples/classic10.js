/**
 * 基数排序（Radix Sort）
 * 时间复杂度O(n*k)，最坏O(n*k)，最好O(n*k)，空间复杂度O(n+k)，稳定。
 * 基本思想：基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；
 * 依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，
 * 再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。
 * 算法描述：
 * 1. 取得数组中的最大数，并取得位数；
 * 2. arr为原始数组，从最低位开始取每个位组成radix数组；
 * 对radix进行计数排序（利用计数排序适用于小范围数的特点）；
 */
// 代码实现
function radixSort(arr) {
  let maxDigit = 0
  for (let i = 0; i < arr.length; i += 1) {
    const numLen = String(arr[i]).length
    if (maxDigit < numLen) {
      maxDigit = numLen
    }
  }

  const counter = []
  let mod = 10
  let dev = 1
  for (let i = 0; i < maxDigit; i += 1, dev *= 10, mod *= 10) {
    for (let j = 0; j < arr.length; j += 1) {
      const bucket = parseInt((arr[j] % mod) / dev, 10)

      if (!counter[bucket]) {
        counter[bucket] = []
      }
      counter[bucket].push(arr[j])
    }

    let pos = 0
    for (let j = 0; j < counter.length; j += 1) {
      if (counter[j]) {
        let value = counter[j].shift()
        while (value != null) {
          arr[pos] = value
          pos += 1
          value = counter[j].shift()
        }
      }
    }
  }

  return arr
}

const a = [3, 4, 1, 15, 9, 22, 2, 10, 6]

const sa = radixSort(a)
console.log(sa)
