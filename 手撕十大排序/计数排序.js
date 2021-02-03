//计数排序  要求被排序的数组的值 有明确的范围
/**
 * 计数排序是一个稳定的排序算法。当输入的元素是 n 个 0到 k 之间的整数时，
 * 时间复杂度是O(n+k)，空间复杂度也是O(n+k)，其排序速度快于任何比较排序算法。
 * 当k不是很大并且序列比较集中时，计数排序是一个很有效的排序算法。
 */
function countingSort(arr) {
    let temp = [];
    arr.forEach(itm => {
        if (!temp[itm]) { //如果从未记过数，则设置初始变量
            temp[itm] = 0
        }
        temp[itm]++; //统计itm出现次数
    });

    let index = 0; //索引
    temp.forEach((itm, idx) => {
        while (itm) { //idx有itm个，将idx对应的个数填回原数组，实现排序
            arr[index++] = idx;
            itm--; //填充一个，统计的总数就减去一个
        }
    })
    return arr;
}

let ary = [9, 5, 3, 1, 6, 4, 7, 8, 2, 0];
console.log(countingSort(ary));