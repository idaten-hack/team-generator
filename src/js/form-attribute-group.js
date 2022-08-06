class FormAttributeGroup extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div id='form-element-${this.getAttribute('groupId')}' class='form-element' style='padding: 10px; margin-bottom: 10px; border: 1px dotted #333333'>
        <div>
          <label for='element'>属性: </label>
          <input type='text' class='element' id='element' required />
        </div>
        <br />
        <div style='padding: 10px; margin-bottom: 10px; border: 1px dotted #333333'>
          <div id='forms-area' class='form-group' style='display: inline-flex'>
            <label for='element'>名前: </label>
            <input type='text' class='name' id='name' required />
            <label for='element'>　　メアド: </label>
            <input type='text' class='email' id='email' required />
            <input type='button' value='＋' onclick="addForm('forms-area')" />
            <input type='button' value='－' onclick="deleteForm('forms-area')" />
          </div>
        </div>
        <input type='button' value='＋' onclick="addForm('form-element-${this.getAttribute('groupId')}')" />
        <input type='button' value='－' onclick="deleteForm('form-element-${this.getAttribute('groupId')}')" />
      </div>
    `;
  }
}

customElements.define('from-attribute-group', FormAttributeGroup);