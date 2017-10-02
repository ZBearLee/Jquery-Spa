//Single page Application
//单页  指的不是一页  是在一页中动态的加载内容
//用户感觉不到浏览器的刷新
//命名空间
//立即执行函数，可以用于构建对象和类
var spa = (function () {
    var initModule = function ($container) {  //$可以是变量名的一部分
        //更为复杂，形成了一个闭合的空间，私有变量
      spa.shell.initModule($container)
    }
    return {
        initModule: initModule   //es5的语法/写法
        //return 的是共有的变量
    }
})()

