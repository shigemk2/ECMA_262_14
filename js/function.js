// オブジェクトが作られた時点で実行されているわけではなく、再帰で呼び出すときにvar aは見えているし、存在している
// 危ない書き方
var a = function (n) {
  if(n < 1) {
    return 1;
  } else {
    return n * a(n-1);
  }
};
console.log(a(10));
// var a = 2;
// このhogeは書き換えられないので安全
var b = function hoge(n) {
  if(n < 1) {
    return 1;
  } else {
    return n * hoge(n-1);
  }
};
console.log(b(5));

var hoge = function c() {
  var x = 123;
  return x;
};

console.log(hoge()); // hogeは呼び出せるがcは呼べない
// console.log(c());
// console.log(c.x);

// 関数の中身も省略できる その場合はundefined
function d() {
};
console.log(d());

// 関数の中身を定義する
function e() {
  return "e";
};
console.log(e());

// 演算子の落とし穴(11.6 11.7)
var f1 = new String("123") + "4";
console.log(typeof(f1));
var f2 = "123" + 4;
console.log(typeof(f2));
var f3 = "123" - 4;
console.log(typeof(f3));
// オブジェクト同士を連結してもstring
var f4 = new String("123") + new String("4");
console.log(typeof(f4));








