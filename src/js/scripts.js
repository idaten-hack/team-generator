let groupId = 0;
let nameId = 0;
let areaId = 0;
let result;

function addGroupForm() {
  const contentArea = document.getElementById('form-group');
  const newFromAttributeGroup = document.createElement('div');
  groupId++;
  nameId++;
  areaId++;
  newFromAttributeGroup.setAttribute('id', `form-group-${groupId}`);
  newFromAttributeGroup.className = 'mt-3 p-3 bg-gray-50 rounded-md shadow sm:rounded-md sm:overflow-hidden';
  newFromAttributeGroup.innerHTML = `
      <div class='col-span-6 sm:col-span-4'>
        <label for='element'>属性</label>
        <input
          type='text'
          class='element focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
          id='element'
          required
        />
      </div>
      <div id='form-area-${areaId}' class='grid grid-cols-3 gap-6'>
        <div id='form-input-info-${nameId}' class='form-group'>
          <div class='mt-2'>
            <div>
              <label for='element'>名前</label>
              <input
                type='text'
                class='name group-num focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                id='name'
                required
              />
            </div>
            <div class='mt-1'>
              <label for='element'>Zoomのメールアドレス</label>
              <input
                type='text'
                class='email focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                id='email'
                required
              />
            </div>
          </div>
          <div class='mt-3'>
            <input
              type='button'
              class='bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              value='＋'
              onclick="addInputInfo('form-area-${areaId}')"
            />
            <input
              type='button'
              class='bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              value='－'
              onclick="deleteElement('form-input-info-${nameId}')"
            />
          </div>
        </div>
      </div>
      <div class='mt-3'>
        <input
          type='button'
          class='bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          value='属性を追加'
          onclick='addGroupForm()'
        />
        <input
          type='button'
          class='bg-red-600 py-2 px-3 border border-transparent rounded-md shadow-sm text-sm leading-4 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          value='属性を削除'
          onclick="deleteElement('form-group-${groupId}')"
        />
      </div>
    `;
  contentArea.appendChild(newFromAttributeGroup);
}

// eslint-disable-next-line no-unused-vars
function deleteElement(idName) {
  const contentArea = document.getElementById(idName);
  contentArea.remove();
}

// eslint-disable-next-line no-unused-vars
function addInputInfo(addAreaId) {
  const contentArea = document.getElementById(addAreaId);
  const newFromAttributeGroup = document.createElement('div');
  nameId++;
  newFromAttributeGroup.setAttribute('id', `form-input-info-${nameId}`);
  newFromAttributeGroup.innerHTML = `
          <div class='mt-2'>
            <div>
              <label for='element'>名前</label>
              <input
                type='text'
                class='name group-num focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                id='name'
                required
              />
            </div>
            <div class='mt-1'>
              <label for='element'>Zoomのメールアドレス</label>
              <input
                type='text'
                class='email focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                id='email'
                required
              />
            </div>
          </div>
          <div class='mt-3'>
            <input
              type='button'
              class='bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              value='＋'
              onclick="addInputInfo('form-area-${areaId}')"
            />
            <input
              type='button'
              class='bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              value='－'
              onclick="deleteElement('form-input-info-${nameId}')"
            />
          </div>
    `;
  contentArea.appendChild(newFromAttributeGroup);
}

function downloadCSV() {
  outputCSV(result);
}

window.addEventListener('DOMContentLoaded', function () {
  addGroupForm();

  // HTML要素を取得
  let formGroup = document.getElementById('form-group');

  // submitを待っている
  formGroup.addEventListener('submit', function (e) {
    // 今出ている'form-area-i'を判別し、属性を配列に入れる。
    let elementList = [];
    let elementCount = 0;

    for (let i = 1; i <= groupId; i++) {
      if (document.getElementById('form-group-' + i) != null) {
        // 'form-area-i'のdiv要素の個数を取得
        let elementListCount = document.querySelectorAll('#form-area-' + i + ' div').length;
        // div要素がリニューアルにより増えてしまったため、5で割って人数を割り出しています。
        elementListCount = elementListCount / 5;

        // 要素分属性の配列に追加
        for (let j = 0; j < elementListCount; j++) {
          elementList.push(elementCount);
        }
        elementCount++;
      }
    }

    // 人の名前の表示
    const nameListClass = document.getElementsByClassName('name');
    let nameList = [];
    for (let i = 0; i < nameListClass.length; i++) {
      nameList.push(nameListClass[i].value);
    }

    // メアドの表示
    const emailListClass = document.getElementsByClassName('email');
    let emailList = [];
    for (let i = 0; i < emailListClass.length; i++) {
      emailList.push(emailListClass[i].value);
    }
    // デバッグ時ページが更新されないようにイベントを止める
    e.preventDefault();
    const groupNum = document.getElementsByClassName('group-num');
    // eslint-disable-next-line no-undef
    result = distributeGroupMember(nameList, emailList, elementList, groupNum[0].value);
    // eslint-disable-next-line no-undef
    displayLotteryResult(result);
  });
});
