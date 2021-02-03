class HeapSort {

    constructor(arr) {
        this.ary = arr;
        this.len = arr.length;
    }

    heapfiy(arr, i) { //堆调整
        let left = 2 * i + 1, right = 2 * i + 2, largest = i; //数组映射到树上的子结点
        if (left < this.len && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < this.len && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) { //如果子结点比父结点大就进行交换
            [arr[largest], arr[i]] = [arr[i], arr[largest]];
            this.heapfiy(arr, largest); //递归子结点，继续交换最大值
        }
    }
    /*
    下面是堆 序号 对应数组
            0
       1          2
     3   4     5     6
    7 8 9 10 11 12 13 14 
    */
    buildMaxHeap(arr) { //建立大顶堆
        for (let i = parseInt(this.len / 2); i >= 0; i--) { // 自下而上的进行交换
            this.heapfiy(arr, i);
        }
    }

    sort() {
        let arr = this.ary;
        this.buildMaxHeap(arr);
        for (let i = this.len - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]]; //每个最大数（堆顶数）和末尾数交换(this.len位置)
            this.len--; //已排序数不参与堆排序
            this.heapfiy(arr, 0); //剩余堆重排找最大数
        }
    }
}

let arr = [9, 8, 2, 5, 1, 3, 6, 4, 7, 0];
let heapSort = new HeapSort(arr);
heapSort.sort();
console.log(arr);