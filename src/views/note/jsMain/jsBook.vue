<template>
  <div class="jsTv-box">
    <h2>原型链</h2>
    <b>
      <p>下图当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么他就会用__proto__一层一层的去prototype往上找这个属性，这就是我理解的原型链</p>
    </b>
    <img
      src="../../../assets/js原型链.png"
      alt=""
    >
    <h4> 1.原型链继承
    </h4>
    <code>Parent.prototype.grand = 'grand';<br>

      function Parent (name) {<br>
      this.name = name || 'parent';<br>
      this.color = ['red', 'orange', 'yellow'];<br>
      }<br>

      function Child () {<br>

      }<br>

      Child.prototype = new Parent();<br>
      var child1 = new Child('child1');<br>
      var child2 = new Child('child2');<br>
    </code>
    <b>
      <p style="color:skyblue">弊端<br>1.引用值共享问题
        引用值会被所有的实例（这里以两个为例，下面也将都是）共享，一个对象修改了原型属性，那么另一个的原型属性也会被修改
        <br>
        2.不能传参
        在创建Child的实例时，不能向Parent传递参数；如果传递也不会有作用
      </p>
    </b>
    <h4> 2.借用构造函数（经典继承）</h4>
    <code> Parent.prototype.grand = 'grand';<br>

      function Parent (name) {<br>
      this.name = name || 'parent';<br>
      this.color = ['red', 'orange', 'yellow'];<br>
      }<br>

      function Child (name,) {<br>
      Parent.call(this, name);<br>
      }<br>

      var child1 = new Child('child1');<br>
      var child2 = new Child('child2');<br>

    </code>
    <b>
      <p style="color:skyblue">优点<br>解决引用值共享问题，可以通过Child向Parent传参
        <br>
        缺点<br>
        Parent上的原型不能被继承
      </p>
    </b>
    <h4> 3.组合继承（伪经典继承）
    </h4>
    <code>
      Parent.prototype.grand = 'grand';<br>

      function Parent(name) {<br>
      this.name = name || 'parent';<br>
      this.color = ['red', 'orange', 'yellow'];<br>
      }<br>

      function Child(name, age) {<br>
      Parent.call(this, name);<br>
      this.age = age;<br>
      }<br>

      Child.prototype = new Parent();<br>
      Child.prototype.constructor = Child;<br>

      var child1 = new Child('child1', 18);<br>
      var child2 = new Child('child2', 19);<br>

    </code>
    <b>
      <p style="color:skyblue">优点<br>1.Parent上的原型可以被继承

        2.解决了引用值共享的问题

        3.可以通过Child向Parent传参
        <br>
        缺点<br>
        除了多执行了一次call
      </p>
    </b>
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