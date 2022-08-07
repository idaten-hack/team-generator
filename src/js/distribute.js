function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //random index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
}

/***
 *
 * 重みつけ振り分け処理
 *
 * @param nameList
 * @param mailList
 * @param listWeight
 * @param groupNum
 * @returns {*[]}
 */
function distributeGroupMember(nameList, mailList, listWeight, groupNum) {
  const groupList = [];
  const tmpList = [];
  const shuffledList = [];
  let weightNum = 0;

  // メールリストと名前リストをまとめる
  const unitList = [];
  for (let i = 0; i < nameList.length; i++) {
    unitList.push({ name: nameList[i], mail: mailList[i] });
  }

  //重みごとのグループに分け、グループごとにシャッフルしてから結合
  for (let i = 0; i < unitList.length; i++) {
    if (listWeight[i] !== weightNum) {
      shuffle(tmpList);
      shuffledList.push.apply(shuffledList, tmpList);
      tmpList.splice(0);
      weightNum++;
    }
    tmpList.push(unitList[i]);
  }
  shuffle(tmpList);
  shuffledList.push.apply(shuffledList, tmpList);

  // レスポンス内容作成
  let tmpGroupNum = 0;

  for (let i = 0; i < groupNum; i++) {
    groupList.push([]);
  }
  for (let i = 0; i < shuffledList.length; i++) {
    groupList[tmpGroupNum].push(shuffledList[i]);
    tmpGroupNum++;
    if (tmpGroupNum === Number(groupNum)) tmpGroupNum = 0;
  }

  // 過去の結果を格納
  sessionStorage.setItem('pastResults', JSON.stringify(groupList));

  return groupList;
}
