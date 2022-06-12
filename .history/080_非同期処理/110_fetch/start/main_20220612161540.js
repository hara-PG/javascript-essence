fetch(`users.json`)
  .then(function (response) {
    return response.json();
  })
  .then(function (Json) {
    console.log(Json);
    // for文を使用してループ
    for (const user of Json) {
      // テンプレートリテラルを使って出力
      // nameとageがusers.jsonファイルのものを使用
      console.log(`おれは ${user.name}, 今年で${user.age}になる。`);
    }
  });
