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

  kuromoji.builder({ dicPath: "./dict" }).build(function (err, tokenizer) {
    // tokenizer is ready
    const tokens = tokenizer.tokenize(text);
    let preprocessed_tokens = []
    tokens.forEach((token) => {
      if (token.pos === "名詞") {
        preprocessed_tokens.push(token.surface_form);
      }
    });
    console.log(tokens);
    console.log(preprocessed_tokens);

  });
});

