document.querySelector('#tweetButton').addEventListener('click',()=>{
  //ツイート内容を取得
  let tweetText = document.querySelector('#tweetTextArea').Value;

  //半角スペースと＃JavaScriptをツイート文言に追加する
  tweetText +=' #JavaScript';

  //エンコードする
  const encodedText = encodeURIComponent(tweetText);

  //ツイート用リンクを作成する
  const tweetURL=`https://twitter.com/compose/tweet?text=${encodedText}`;

  //ツイート用リンクを開く
  window.open(tweetURL);
});
