//Question_01:
function displayFormData(event) {
    event.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var formDataList = document.getElementById('form-data-list');
    var formData = document.createElement('li');
    formData.textContent = 'Name: ' + nameInput.value + ', Email: ' + emailInput.value + ', Password: ' + passwordInput.value;
    formDataList.appendChild(formData);
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}

//Question_02:
function toggleContent(readMoreElement) {
    var item = readMoreElement.parentNode;
    var content = item.querySelector('.content');
    var fullContent = item.querySelector('.full-content');
    var readMoreText = item.querySelector('.read-more');

    if (content.style.display === 'none') {
      content.style.display = 'block';
      fullContent.style.display = 'none';
      readMoreText.textContent = 'Read more';
    } else {
      content.style.display = 'none';
      fullContent.style.display = 'block';
      readMoreText.textContent = 'Read less';
    }
  }

// Question_03:
