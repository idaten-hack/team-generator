/**
 *  重みつけ振り分けした結果をブラウザに表示
 *
 * @param result 抽選結果
 */
function displayLotteryResult(result) {
  // HTMLに抽選結果をレンタリング
  const res = document.getElementById('result');
  res.innerHTML = '';
  for (let i = 0; i < result.length; i++) {
    // ルーム名を表示
    res.insertAdjacentHTML('afterbegin', `<h3>ルーム ${i + 1}</h3><ul id='wrapper-${i}'></ul>`);
    // メンバー を表示
    let memberElement = document.getElementById(`wrapper-${i}`);
    for (let j = 0; j < result[i].length; j++) {
      memberElement.insertAdjacentHTML('afterbegin', `<li>${result[i][j].name}</li>`);
    }
  }
}
