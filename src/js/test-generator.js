function getRandomString(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
  }
  return result;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function testGenerator(groupNum, peopleNum) {

  const nameList = [];
  const mailList = [];
  const listWeight = [];

  let i;
  let weightNum = 0;

  for(i = 0; i < peopleNum; i++){
    nameList.push(getRandomString(5)); //5文字のrandomな文字列を追加
    mailList.push(getRandomString(5) + '@' + getRandomString(3) + '.com');
  }

  for(i = 0; i < peopleNum; i++){
    listWeight.push(weightNum);
    if(i>getRandomInt(peopleNum)) weightNum++;
  }

  console.log(peopleNum);

  console.log(`${nameList.join(' ')}
${mailList.join(' ')}
${listWeight.join(' ')}`);

  return [groupNum, nameList, mailList, listWeight];

}

testGenerator(100);