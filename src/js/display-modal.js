window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

const modal = document.getElementById('my-modal');
const button = document.getElementById('ok-btn');

// We want the modal to close when the OK button is clicked
button.onclick = function () {
  modal.style.display = 'none';
};
