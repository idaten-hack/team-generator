'use strict';

/***
 *
 * 結果をCSV出力する
 *
 * @param groupData
 */
const outputCSV = (groupData) => {
  let outputText = 'Pre-assign Room Name,Email Address\n';
  let groupId = 1;

  // CSVファイルの中身の作成
  for (let i = 0; i < groupData.length; i++) {
    for (let j = 0; j < groupData[i].length; j++) {
      outputText += 'グループ' + groupId + ',' + groupData[i][j].mail + '\n';
    }
    groupId++;
  }

  // ファイルダウンロードの準備から実行
  const blob = new Blob([outputText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const aTag = document.createElement('a');
  document.body.appendChild(aTag);
  aTag.download = 'output.csv';
  aTag.href = url;
  aTag.click();
  aTag.remove();
  URL.revokeObjectURL(url);
};
