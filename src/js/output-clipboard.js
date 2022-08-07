/***
 *
 * 部屋の結果クリップボードへコピー
 *
 * @param groupData
 * @returns {*[]}
 */

// eslint-disable-next-line no-unused-vars
function outputClipboard(groupData) {
  let outputText = '';

  // クリップボードの中身を作成
  for (let i = 0; i < groupData.length; i++) {
    outputText += '【ルーム: ' + (i + 1) + '】\n';
    for (let j = 0; j < groupData[i].length; j++) {
      outputText += groupData[i][j].name + '\n';
    }
    outputText += '\n';
  }

  navigator.clipboard.writeText(outputText);
}
