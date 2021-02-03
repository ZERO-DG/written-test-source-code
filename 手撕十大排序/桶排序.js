//桶排序
function buckeSort(arr, bucketSize) {
    if (arr.length === 0) {
        return arr;
    }

    let i;
    let minVal = Math.min(...arr), maxVal = Math.max(...arr);
    // arr.reduce(a, b => a > b ? a : b); //筛选最值同上的方法

    //桶初始化
    let DEFAULT_BUCKET_SIZE = 5; //设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    let bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;
    let buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minVal) / bucketSize)].push(arr[i]);
    }

    //给桶内排序
    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);
        while (buckets[i].length) {
            arr.push(buckets[i].shift());
        }
    }

    //插入排序
    function insertionSort(arr) {
        let len = arr.length;
        let preIndex, current;
        for (let i = 1; i < len; i++) {
            preIndex = i - 1;
            current = arr[i];
            while (preIndex >= 0 && arr[preIndex] > current) {
                arr[preIndex + 1] = arr[preIndex];
                preIndex--;
            }
            arr[preIndex + 1] = current;
        }
        return arr;
    }

    return arr;
}


//排序测试
let ary = [9, 5, 4, 6, 8, 7, 1, 0, 2, 3];
buckeSort(ary);
console.log(ary);