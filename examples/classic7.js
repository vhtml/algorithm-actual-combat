/**
 * 堆排序（Heap Sort）
 * 基本思想：是指利用堆这种数据结构所设计的一种排序算法。
 * 堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。
 * 时间复杂度O(nlogn)，最坏O(nlogn)，最好O(nlogn)，空间复杂度O(1)，不稳定
 * 算法描述：
 * 1. 将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区；
 * 2. 将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,……Rn-1)和新的有序区(Rn),且满足R[1,2…n-1]<=R[n]；
 * 3. 由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,……Rn-1)调整为新堆，
 * 然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2….Rn-2)和新的有序区(Rn-1,Rn)。
 * 不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。
 */

// 代码实现
function heapify(arr, currentIndex, size) {
  if (currentIndex < size) {
    // 左子树和右子树的位置
    const left = currentIndex * 2 + 1
    const right = currentIndex * 2 + 2
    // 把当前父节点位置看成是最大的
    let max = currentIndex
    // 跟左子树比较
    if (left < size && arr[max] < arr[left]) {
      max = left
    }
    // 跟右子树比较
    if (right < size && arr[max] < arr[right]) {
      max = right
    }
    // 如果最大的不是根元素位置，那么就交换
    if (max !== currentIndex) {
      const tmp = arr[max]
      arr[max] = arr[currentIndex]
      arr[currentIndex] = tmp
      // 继续比较，直到完成一次建堆（因为改动了子堆，要进行一次修正）
      heapify(arr, max, size)
    }
  }
}

// 完成一次建堆，最大值在堆的顶部(根节点)
function maxHeapify(arr, size) {
  // 从数组的尾部开始（其实中部开始即可），直到第一个元素(角标为0)
  for (let i = Math.floor(size / 2); i >= 0; i -= 1) {
    heapify(arr, i, size)
  }
}

function heapSort(arr) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    // 每次建堆就可以排除一个元素
    maxHeapify(arr, arr.length - i)
    // 交换
    const tmp = arr[0]
    arr[0] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = tmp
  }
  return arr
}

const a = [3, 4, 1, 5, 9, 2, 10, 6]

const sa = heapSort(a)
console.log(sa)

/**
 * 时间复杂度证明：
 * 堆排序的时间复杂度是O(N*lgN)。
 * 假设被排序的数列中有N个数。遍历一趟的时间复杂度是O(N)，需要遍历多少次呢？
 * 堆排序是采用的二叉堆进行排序的，二叉堆就是一棵二叉树，它需要遍历的次数就是二叉树的深度，
 * 而根据完全二叉树的定义，它的深度至少是lg(N+1)。最多是多少呢？由于二叉堆是完全二叉树，因此，它的深度最多也不会超过lg(2N)。
 * 因此，遍历一趟的时间复杂度是O(N)，而遍历次数介于lg(N+1)和lg(2N)之间；因此得出它的时间复杂度是O(N*lgN)。
 */
