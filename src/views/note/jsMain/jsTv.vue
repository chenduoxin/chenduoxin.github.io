<template>
  <div class="jsTv-box">
    <h2>JavaScript数据类型</h2>
    <span>//值类型</span>
    <p> string,boolean, undefined, null, symbol, bigInt;</p>
    <span>//引用类型</span>
    <p>Array;Object;function</p>
    <h2>浅拷贝</h2>
    <h4>注意:</h4>
    <p class="yellow">浅拷贝：重新划分一部分堆内存，将原数据的所有值类型数据都拷贝到新堆内存里，引用类型只拷贝其指针 所以浅拷贝的值类型不会影响原对象，拷贝的引用类型数据如果变更会影响原数组，并且保留同级引用（即 var obj = {a:{},b:obj.a,c:obj.a};）</p>
    <h4><a href="https://www.w3school.com.cn/jsref/jsref_concat_array.asp">Array.concat() </a> </h4>
    <h4><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign">Object.assign()</a></h4>
    <h2>es6 展开操作符 ...</h2>

    <a href="https://blog.csdn.net/gjysk/article/details/124977525?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-124977525-blog-85319618.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-124977525-blog-85319618.pc_relevant_default&utm_relevant_index=2">点我去CSDN了解</a><br>
    <h2>this指向</h2>
    <b>
      <p>定义：A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.（this属于执行环境的一个属性，在非严格模式中指代对象，在严格模式中指代任何值）</p>
    </b>
    <h4> 1.在全局环境中，this指向全部对象</h4>
    <code>console.log(this === window) // 浏览器环境中window是全局对象</code>

    <h4> 2.在函数中，this指向函数的调用者，如果函数是直接执行的，那this默认指向全局对象</h4>
    <code>function test()
      {
      return this
      } <br>
      console.log(test() === window) // 直接执行函数，this默认指向全局对象
      <br>
      let o = {} <br>
      o._test = test <br>
      console.log(o._test() === window) // false <br>
      console.log(o._test() === o) // true</code>

    <h4> 3.在class中，this指定的是class实例,初始class的constructor函数将this默认绑定到了实例上，但是派生class的constructor函数并没有将this绑定到实例上，所以在调用this之前需要执行super函数，它的作用类似于 this = new (初始class)，否则会报错误，如果派生class没有constructor函数，者可以不用调用super，简言之，super就是为了将初始class的实例绑定到派生class的this上。

    </h4>
    <code>class Test {
      constructor() {
      this.a = 10
      }
      } <br>
      class Test2 extends Test {
      constructor() {
      super() // 没有这个就是报ReferenceError
      this.a = 20
      }
      } <br>
      console.log((new Test2()).a) // 20</code>
    <h4>4.通过call、apply或者bind可以改变this的指向，详情<a href="https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/">链接</a> </h4><span>注:链接里面内容是英文建议浏览器安装了翻译扩展</span>

    <h4>5.在箭头函数中，this永远指向函数创建时的执行环境</h4>
    <code>const test = () => this <br>
      const o = {}<br>
      o._test = test<br>
      // test是在全局环境中创建的，所以一直都是指向window<br>
      console.log(o._test()) // window</code>
    <h4>箭头函数在对象中：</h4>
    <code>const o = { <br>
      test: function() { <br>
      return (() => this) <br>
      } <br>
      } <br>
      console.log(o.test()() === o) // true</code>
    <h4>6.当函数作为对象的方法调用的时候，this指向调用此方法的对象。(1.在原型链上，继承来的方法如果有this，那它指向继承此方法的对象2.对象中的get或者set方法也是一样的道理)</h4>
    <code>function f() {<br>
      return this.val; <br>
      } <br>
      const o = { <br>
      val: 10 <br>
      } <br>
      o._f = f; <br>
      console.log(o._f()) // 10 </code>
    <h4>7.在构造函数中，this指向被构造出来的新对象</h4>
    <code>function test() {<br>
      this.a = 10; <br>
      } <br>
      const o = new test() <br>
      console.log(o.a) // 10</code>
    <h4>8.在DOM事件处理函数中，this指向e.currentTarget，也就是当前绑定事件的元素对象</h4>

    <h2>闭包</h2>
    <h3>1、概念</h3>
    <span><b><span>闭包函数：</span></b><span>声明在一个函数中的函数，叫做闭包函数。</span></span>
    <span><b><span>闭包：</span></b><span>内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回（寿命终结）了之后。</span></span>
    <h3>2、特点</h3>
    <b>
      <p style="color:skyblue">让外部访问函数内部变量成为可能；<br>

        局部变量会常驻在内存中；<br>

        可以避免使用全局变量，防止全局变量污染；<br>

        会造成内存泄漏（有一块内存空间被长期占用，而不被释放）</p>
    </b>

    <h3>3、闭包的创建：</h3>
    <p>闭包就是可以创建一个独立的环境，每个闭包里面的环境都是独立的，互不干扰。闭包会发生内存泄漏，每次外部函数执行的时 候，外部函数的引用地址不同，都会重新创建一个新的地址。但凡是当前活动对象中有被内部子集引用的数据，那么这个时候，这个数据不删除，保留一根指针给内部活动对象。

      闭包内存泄漏为： key = value，key 被删除了 value 常驻内存中; 局部变量闭包升级版（中间引用的变量） => 自由变量；
    </p>
    <h3>4、闭包的应用场景</h3>
    <p>闭包找到的是同一地址中父级函数中对应变量最终的值</p>

    <h4>例子1</h4>
    <code>function funA(){ <br>
      var a = 10; //funA的活动对象中;<br>
      return function(){ //匿名函数的活动对象<br>
      alert(a);<br>
      }<br>
      }<br>
      var b = funA();<br>
      b(); //10<br>
    </code> <br><span><span>剩余例子请移步至</span><span><a href="https://blog.csdn.net/weixin_43586120/article/
details/89456183?spm=1001.2101.3001.6650.10&
utm_medium=distribute.pc_relevant.
none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-10
-89456183-blog-125225998.
pc_relevant_3mothn_strategy_recovery&
depth_1-utm_source=distribute.pc_relevant.
none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-10
-89456183-blog-125225998.
pc_relevant_3mothn_strategy_recovery&
utm_relevant_index=17">链接</a></span></span>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.jsTv-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  line-height: 30px;
  width: 100%;
}
p {
  text-align: left;
}
.yellow {
  background-color: rgb(254, 254, 142);
}
a:link,
a:hover,
a:visited,
a:active {
  color: rgb(98, 184, 23);
}
code {
  color: #fff;
  background-color: #333;
  padding: 20px;
  text-align: left;
  border-radius: 10px;
}
h2,
h3,
h4 {
  text-align: left;
  margin: 20px 0;
}
</style>