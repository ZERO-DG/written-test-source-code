function ajax(url, resolve, reject) {
    const xhr = new XMLHttpRequest();
    //第三个参数为 true 表示是AJAX请求，JavaScript 执行线程不用等待返回的结果，只需要绑定回调函数即可
    xhr.open('get', url, true);
    //成功执行回调
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(xhr.responseText);
        }
    }
    //失败执行回调
    xhr.onerror = () => {
        reject();
    }
    xhr.send()
}

//测试用例
ajax('localhost:3000/123', res => {
    console.log(res);
}, error => {
    console.log(error);
})

/** 
 * get 与 post完整版本
 */
var Ajax = {
    get: function (url, fn) {
        // XMLHttpRequest对象用于在后台与服务器交换数据   
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            // readyState == 4说明请求已完成
            if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                // 从服务器获得数据 
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send();
    },
    // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
    post: function (url, data, fn) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        // 添加http头，发送信息至服务器时内容编码类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send(data);
    }
}
