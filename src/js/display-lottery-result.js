/**
 *  重みつけ振り分けした結果をブラウザに表示
 *
 * @param result 抽選結果
 */
function displayLotteryResult(result) {
  // HTMLに抽選結果をレンタリング
  const res = document.getElementById('result');
  res.innerHTML = '';
  // resultの後に降順で追加していく
  for (let i = result.length - 1; i >= 0; i--) {
    // ルーム名を表示
    res.insertAdjacentHTML('afterbegin', `<h3>ルーム ${i + 1}</h3><ul id='wrapper-${i}'></ul>`);
    // メンバー を表示
    let memberElement = document.getElementById(`wrapper-${i}`);
    for (let j = 0; j < result[i].length; j++) {
      memberElement.insertAdjacentHTML('beforebegin', `<li>${result[i][j].name}</li>`);
    }
  }

  const modal = document.getElementById('my-modal');
  modal.style.display = 'block';
}

/**
 *
 * セッションに保存してある過去の抽選結果を取得
 *
 * @returns {any}
 */

function persistLotteryResult() {
  const content = sessionStorage.getItem('pastResults');
  return JSON.parse(content);
}
