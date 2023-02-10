// HTMLのtextarea要素を取得
const textarea = document.getElementById("textarea");
// form要素を取得
const form = document.querySelector("form");

// form要素のsubmitイベントを検知して、イベントハンドラを実行する
form.addEventListener("submit", async event => {
  // submitイベントのデフォルトの動作を止める
  event.preventDefault();

  // textarea要素のvalueプロパティにアクセスすることで、文字列を取得
  const text = textarea.value;

  let preprocessed_tokens = [];
  const tokenizer = await new Promise((resolve, reject) => {
    kuromoji.builder({ dicPath: "./dict" }).build(function (err, tokenizer) {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokenizer);
    });
  });

  const tokens = tokenizer.tokenize(text);
  console.log(tokens);
  tokens.forEach((token) => {
    if (token.pos === "名詞") {
      preprocessed_tokens.push(token.surface_form);
    }
  });

  tokens.forEach((token) => {

    if (token.pos === "動詞" && token.conjugated_form != "未然形") {
      let verb = token.basic_form + "方法";
      preprocessed_tokens.push(verb);
    }
  });

  let search_term = preprocessed_tokens.join(' ');
  console.log(search_term);

  window.open("https://www.google.com/search?q=" + search_term, "_blank");
});

