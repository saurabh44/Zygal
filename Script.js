function createBoxes() {
      var countInput = document.getElementById('boxCount');
      var count = parseInt(countInput.value);

      var container = document.getElementById('container');
      container.innerHTML = ''; 

      for (var i = 0; i < count; i++) {
        var newBox = document.createElement('div');
        newBox.classList.add('black-box');
        container.appendChild(newBox);
      }
    }
