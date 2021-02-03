
//实现思路：逐层往上查找原型，如果最终的原型为 null ，证明不存在原型链中，否则存在。

const myInstanceof = (left, right) => {
    if (typeof left !== 'object' || left == null) return false; //排除基本类型

    let proto = Object.getPrototypeOf(left);
    while (true) {
        if (proto === right.prototype) return true; //认祖归宗
        if (proto === null) return false; //探索尽头皆是空
        proto = Object.getPrototypeOf(proto); //找爹
    }
}

class PerSon {
    #name = "wxd"; //私有属性
    constructor() { } //没有灵魂的一个人
}

const xw = new PerSon(); //做一个人

console.log(myInstanceof({}, PerSon)); //看看是不是个人