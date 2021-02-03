const myCreate = (obj) => {
    function F() { };
    F.prototype = obj;
    return new F(); //创建了一个继承对象的纯净对象
}

console.log(myCreate({}),
    myCreate({}).__proto__,
    myCreate({}).__proto__.__proto__,
    myCreate({}).__proto__.__proto__.__proto__,
    myCreate({}) === Object);