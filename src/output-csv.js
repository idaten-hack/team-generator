'use strict';

const outputCSV = (groupData) => {
  let outputText = 'Pre-assign Room Name,Email Address\n';
  let groupId = 1;

  for (let i = 0; i < groupData.length; i++) {
    for (let j = 0; j < groupData[i].length; j++) {
      outputText += 'グループ' + groupId + ',' + groupData[i][j] + '\n';
    }
    groupId++;
  }

  const blob = new Blob([outputText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.download = 'output.csv';
  a.href = url;
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};
