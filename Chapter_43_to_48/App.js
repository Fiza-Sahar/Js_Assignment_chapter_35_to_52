// //Question_01:
function show() {
    alert("Hello My name is Fiza Sahar!")
}

// //Question_02:
function showMessage(message) {
    alert(message)
    
}
//Question_03:
function deleteRow(button) {
    var row = button.closest('tr');
    row.remove();
  }

//Question_04:
function changeImage(newImage) {
    var imageElement = document.getElementById('image');
    imageElement.src = newImage;
  }

  function resetImage() {
    var imageElement = document.getElementById('image');
    imageElement.src = 'first_picture.jpg';
  }
  
  //Question_05:
  var counter = 0;
    var counterValueElement = document.getElementById('counter-value');
    var increaseBtn = document.getElementById('increase-btn');
    var decreaseBtn = document.getElementById('decrease-btn');

    increaseBtn.addEventListener('click', function() {
      counter++;
      updateCounterValue();
    });

    decreaseBtn.addEventListener('click', function() {
      if (counter > 0) {
        counter--;
        updateCounterValue();
      }
    });

    function updateCounterValue() {
      counterValueElement.textContent = counter;
    }