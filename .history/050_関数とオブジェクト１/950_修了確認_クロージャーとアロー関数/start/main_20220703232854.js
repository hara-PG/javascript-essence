/**
 * 以下のコードはクロージャーのレクチャーで作成したコードです。
 * これをアロー関数を用いてなるべく短くなるように記載してみてください。
 *
 * 問題１：
 * addNumberFactoryを短く書き直してみましょう。
 */
function addNumberFactory(num) {
  function add5(value) {
    return num + value;
  }
  return add5;
}

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);

/**
 * 問題２：
 * incrementFactoryを短く書き直してみましょう。
 */
function incrementFactory() {
  let num = 0;

  function a() {
    num = num + 1;
    console.log(num);
  }

  return a;
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();
