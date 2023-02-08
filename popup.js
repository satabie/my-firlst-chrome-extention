// HTMLのtextarea要素を取得
const textarea = document.getElementById("textarea");
// form要素を取得
const form = document.querySelector("form");

// form要素のsubmitイベントを検知して、イベントハンドラを実行する
form.addEventListener("submit", event => {
  // submitイベントのデフォルトの動作を止める
  event.preventDefault();

  // textarea要素のvalueプロパティにアクセスすることで、文字列を取得
  const text = textarea.value;
  console.log(text);
});
