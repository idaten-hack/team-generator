// ダミーデータ あとで消す
const dummy = [
  [
    { name: 'aaa', mail: 'aaa@asukl.com' },
    { name: 'bbb', mail: 'bbb@asukl.com' },
    { name: 'ccc', mail: 'ccc@asukl.com' },
  ],
  [
    { name: 'ddd', mail: 'ddd@asukl.com' },
    { name: 'eee', mail: 'eee@asukl.com' },
    { name: 'fff', mail: 'fff@asukl.com' },
  ],
  [
    { name: 'ggg', mail: 'ggg@asukl.com' },
    { name: 'hhh', mail: 'hhh@asukl.com' },
  ],
];

/**
 *  重みつけ振り分けした結果をブラウザに表示
 *
 * @param result 抽選結果
 */
function displayLotteyResult(result) {
  // HTMLに抽選結果をレンタリング
  const res = document.getElementById('result');
  res.innerHTML = '';
  for (let i = 0; i < result.length; i++) {
    // ルーム名を表示
    res.insertAdjacentHTML('afterbegin', `<h3>ルーム ${i + 1}</h3><ul id='wrapper-${i}'></ul>`);
    // メンバー を表示
    let ele = document.getElementById(`wrapper-${i}`);
    for (let j = 0; j < result[i].length; j++) {
      ele.insertAdjacentHTML('afterbegin', `<li>${result[i][j].name}</li>`);
    }
  }
}
